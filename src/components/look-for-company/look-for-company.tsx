import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import LookForCompanyItem from '../look-for-company-item/look-for-company-item';
import { useAppSelector } from '../../hooks';
import { getUser, getUsers } from '../../store/selectors';
import { useAppDispatch } from '../../hooks';
import { getUsersAction } from '../../store/user/user-api-actions';

const MAX_COUNT_ELEMENT = 4;
const MAX_COUNT_USER = 8;

export default function LookForCompany(): JSX.Element {
  const user = useAppSelector(getUser);
  const users = useAppSelector(getUsers);
  const [position, setPosition] = useState<number>(0);
  const dispatch = useAppDispatch();
  const handleRightClick = () => setPosition(position + 1);
  const handleLeftClick = () => setPosition(position - 1);

  useEffect(() => {
    dispatch(getUsersAction({
      trainingTypes: user.trainingTypes?.join(','),
      readyForTraining: true,
      limit: MAX_COUNT_USER
    }));
  }, [dispatch, user]);

  return (
    <section className="look-for-company">
      <div className="container">
        <div className="look-for-company__wrapper">
          <div className="look-for-company__title-wrapper">
            <h2 className="look-for-company__title">
              {users.length ? 'Ищут компанию для тренировки' : 'Скоро здесь появится что - то полезное'}
            </h2>
            <Link className="btn-flat btn-flat--light look-for-company__button" to={AppRoute.UsersCatalog}>
              <span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </Link>
            <div className="look-for-company__controls">
              <button
                className="btn-icon btn-icon--outlined look-for-company__control"
                type="button"
                aria-label="previous"
                onClick={handleLeftClick}
                disabled={!position}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon btn-icon--outlined look-for-company__control"
                type="button"
                aria-label="next"
                onClick={handleRightClick}
                disabled={users?.length ? (position >= users?.length - MAX_COUNT_ELEMENT) : true}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="look-for-company__list">
            {
              users
                .slice(position, position + MAX_COUNT_ELEMENT)
                .map((item) => (
                  <LookForCompanyItem
                    key={`company-${item.id}`}
                    user={item}
                  />
                ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
