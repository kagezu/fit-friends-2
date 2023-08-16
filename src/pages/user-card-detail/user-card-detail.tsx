import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getError, getPersonalOrder, getUserInfo } from '../../store/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import { deleteSubscribeAction, getSubscribedAction, getUserInfoAction, newSubscribeAction } from '../../store/user/user-api-actions';
import { AppRoute, Role } from '../../const';
import { addFriendAction, deleteFriendAction, getFriendAction } from '../../store/friend/friend-api-actions';
import Trainings from '../../components/trainings/trainings';
import { createPersonalOrderAction, getPersonalOrderAction } from '../../store/order/order-api-actions';
import PopupUserMap from '../../components/popup-user-map/popup-user-map';
import PopupCertificates from '../../components/popup-certificates/popup-certificates';

export default function UserCardDetail(): JSX.Element {
  const user = useAppSelector(getUserInfo);
  const errors = useAppSelector(getError);
  const personalOrder = useAppSelector(getPersonalOrder);
  const [isViewPopup, setIsViewPopup] = useState<boolean>(false);
  const [isViewPopupCertificates, setIsViewPopupCertificates] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubscribeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (id) {
      if (evt.target.checked) {
        dispatch(newSubscribeAction(id));
      } else {
        dispatch(deleteSubscribeAction(id));
      }
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getUserInfoAction({ id, navigate }));
      dispatch(getFriendAction(id));
      dispatch(getPersonalOrderAction(id));
      dispatch(getSubscribedAction(id));
    }
  }, [dispatch, navigate, id]);

  if (!id || !user.id) {
    return <div></div>;
  }

  return (
    <>
      {isViewPopup ? <PopupUserMap user={user} onClose={() => setIsViewPopup(false)} /> : null}
      {isViewPopupCertificates ? <PopupCertificates user={user} onClose={() => setIsViewPopupCertificates(false)} /> : null}
      <Header />
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button onClick={() => navigate(AppRoute.UsersCatalog)} className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="user-card">
                  <h1 className="visually-hidden">Карточка пользователя</h1>
                  <div className="user-card-coach__wrapper">
                    <div className="user-card-coach__card">
                      <div className="user-card-coach__content">
                        <div className="user-card__head">
                          <h2 className="user-card__title">{user.name}</h2>
                        </div>
                        <div className="user-card__label">
                          <button onClick={() => setIsViewPopup(true)} className="btn-flat inner-page__back">
                            <svg className="user-card-coach__icon-location" width="12" height="14" aria-hidden="true">
                              <use xlinkHref="#icon-location"></use>
                            </svg>
                            <span>{user.location}</span>
                          </button>
                        </div>
                        <div className="user-card-coach__status-container">
                          {
                            user.role === Role.User ? null :
                              <div className="user-card-coach__status user-card-coach__status--tag">
                                <svg className="user-card-coach__icon-cup" width="12" height="13" aria-hidden="true">
                                  <use xlinkHref="#icon-cup"></use>
                                </svg><span>Тренер</span>
                              </div>
                          }
                          {
                            user.readyForTraining ?
                              <div className="user-card-coach__status user-card-coach__status--check">
                                {
                                  user.role === Role.User ?
                                    <span>Готов к тренировке</span> :
                                    <span>Готов тренировать</span>
                                }
                              </div> :
                              <div className="user-card-coach-2__status user-card-coach-2__status--check">
                                {
                                  user.role === Role.User ?
                                    <span>Не готов к тренировке</span> :
                                    <span>Не готов тренировать</span>
                                }
                              </div>
                          }
                        </div>
                        <div className="user-card__text">
                          <p>{user.description}</p>
                          <p>{user.resume}</p>
                        </div>
                        {
                          user.role === Role.Coach ?
                            <button onClick={() => setIsViewPopupCertificates(true)} className="btn-flat user-card-coach__sertificate" type="button">
                              <svg width="12" height="13" aria-hidden="true">
                                <use xlinkHref="#icon-teacher"></use>
                              </svg><span>Посмотреть сертификаты</span>
                            </button> : null
                        }
                        <ul className="user-card__hashtag-list">
                          {
                            user.trainingTypes?.map((item) => (
                              <li key={item} className="user-card__hashtag-item">
                                <div className="hashtag"><span>#{item}</span></div>
                              </li>))
                          }
                        </ul>
                        {
                          user.friend ?
                            <button
                              onClick={() => { dispatch(deleteFriendAction(id)); }}
                              className="btn btn--outlined user-card-coach-2__btn" type="button"
                            >Удалить из друзей
                            </button> :
                            <button
                              onClick={() => { dispatch(addFriendAction(id)); }}
                              className="btn user-card__btn" type="button"
                            >Добавить в друзья
                            </button>
                        }
                        {errors.message ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.message}</span> : ''}
                      </div>
                      <div className="user-card__gallary">
                        <ul className="user-card__gallary-list">
                          <li className="user-card__gallary-item">
                            <img src="/img/content/user-card-photo1.jpg" srcSet="/img/content/user-card-photo1@2x.jpg 2x" width="334" height="573" alt="photo1" />
                          </li>
                          <li className="user-card__gallary-item">
                            <img src="/img/content/user-card-photo2.jpg" srcSet="/img/content/user-card-photo2@2x.jpg 2x" width="334" height="573" alt="photo2" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {
                      user.role === Role.Coach ?
                        <div className="user-card-coach__training">
                          <Trainings
                            params={{ coachId: user.id }}
                            title={'Тренировки'}
                          />
                          <form className="user-card-coach__training-form">
                            {
                              !personalOrder.id && user.readyForIndividualTraining ?
                                <button
                                  onClick={() => { dispatch(createPersonalOrderAction(id)); }}
                                  className="btn user-card-coach__btn-training" type="button"
                                >Хочу персональную тренировку
                                </button> :
                                null
                            }
                            <div className="user-card-coach__training-check">
                              <div className="custom-toggle custom-toggle--checkbox">
                                <label>
                                  <input onChange={handleSubscribeChange} type="checkbox" value="subscribe" name="subscribe" defaultChecked={!!user.subscribed} />
                                  <span className="custom-toggle__icon">
                                    <svg width="9" height="6" aria-hidden="true">
                                      <use xlinkHref="#arrow-check"></use>
                                    </svg>
                                  </span>
                                  <span className="custom-toggle__label">Получать уведомление на почту о новой тренировке</span>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div> : null
                    }
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div >
      </main >
    </>
  );
}
