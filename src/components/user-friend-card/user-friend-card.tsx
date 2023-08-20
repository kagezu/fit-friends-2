import { User } from '../../types/user';
import { Role, STATIC_PATH } from '../../const';
import { OrderStatus } from '../../types/order-tatus';
import { PersonalOrder } from '../../types/personal-order';
import { useAppDispatch } from '../../hooks';
import { acceptPersonalOrderAction, createPersonalOrderAction, getPersonalOrdersAction, rejectPersonalOrderAction } from '../../store/order/order-api-actions';
import { useState } from 'react';

export default function UserFriendCard({ user, order, userId, role }: { user: User; order?: PersonalOrder; userId: string; role: string }): JSX.Element {
  const [isOrder, setIsOrder] = useState(!!order);
  const dispatch = useAppDispatch();

  const handleAcceptClick = () => {
    dispatch(acceptPersonalOrderAction(user.id));
    dispatch(getPersonalOrdersAction());
  };
  const handleRejectClick = () => {
    dispatch(rejectPersonalOrderAction(user.id));
    dispatch(getPersonalOrdersAction());
  };

  return (
    <li className="friends-list__item">
      <div className="thumbnail-friend">
        <div
          className={`thumbnail-friend__info ${user.role === Role.User ?
            'thumbnail-friend__info--theme-light' :
            'thumbnail-friend__info--theme-dark'}`}
        >
          <div className="thumbnail-friend__image-status">
            <div className="thumbnail-friend__image">
              <picture>
                <img src={user.avatar ? `${STATIC_PATH}${user.avatar}` : ''} width="82" height="82" alt="" />
              </picture>
            </div>
          </div>
          <div className="thumbnail-friend__header">
            <h2 className="thumbnail-friend__name">{user.name}</h2>
            <div className="thumbnail-friend__location">
              <svg width="14" height="16" aria-hidden="true">
                <use xlinkHref="#icon-location"></use>
              </svg>
              <address className="thumbnail-friend__location-address">{user.location}</address>
            </div>
          </div>
          <ul className="thumbnail-friend__training-types-list">
            {
              user.trainingTypes?.map((hashtag) => (
                <li key={`${hashtag}-${user.id}`}>
                  <div className="hashtag thumbnail-friend__hashtag">
                    <span>#{hashtag}</span>
                  </div>
                </li>
              ))
            }
          </ul>
          {
            (user.readyForTraining && user.role === Role.User) || user.readyForIndividualTraining ?
              <div className="thumbnail-friend__activity-bar">
                <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-ready"><span>Готов к&nbsp;тренировке</span>
                </div>
                {
                  !isOrder && role === Role.User ?
                    <button onClick={() => { dispatch(createPersonalOrderAction(user.id)); setIsOrder(true); }} className="thumbnail-friend__invite-button" type="button">
                      <svg width="43" height="46" aria-hidden="true" focusable="false">
                        <use xlinkHref="#icon-invite"></use>
                      </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
                    </button> : null
                }
              </div> :
              <div className="thumbnail-friend__activity-bar">
                <div className="thumbnail-friend__ready-status thumbnail-friend__ready-status--is-not-ready"><span>Не&nbsp;готов к&nbsp;тренировке</span>
                </div>
              </div>
          }
        </div>
        {
          order?.orderStatus === OrderStatus.Pending && order?.user === userId ?
            <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
              <p className="thumbnail-friend__request-text">Запрос на&nbsp;совместную тренировку</p>
              <div className="thumbnail-friend__button-wrapper">
                <button onClick={handleAcceptClick} className="btn btn--medium btn--dark-bg thumbnail-friend__button" type="button">Принять</button>
                <button onClick={handleRejectClick} className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button" type="button">Отклонить</button>
              </div>
            </div> : null
        }
        {
          order?.orderStatus === OrderStatus.Rejected ?
            <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-coach">
              <p className="thumbnail-friend__request-text">Запрос на&nbsp;персональную тренировку отклонён</p>
            </div> : null
        }
        {
          order?.orderStatus === OrderStatus.Accepted ?
            <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-coach">
              <p className="thumbnail-friend__request-text">Запрос на&nbsp;персональную тренировку принят</p>
            </div> : null
        }
      </div>
    </li>
  );
}
