import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import TrainingCard from '../../components/training-card/training-card';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingFiltred } from '../../store/selectors';
import { getMyBuyTrainingsAction } from '../../store/training/training-api-actions';
import { Training } from '../../types/training';

const MAX_COUNT_CARD_ON_PAGE = 4;

export default function MyPurchases(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingFiltred) as unknown as { training: Training; count: number }[];
  const [page, setPage] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const viewTrainings = trainings.filter(({ count }) => (count || !isActive))
    .slice(0, (page + 1) * MAX_COUNT_CARD_ON_PAGE)
    .map(({ training }) => training);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleBeginClick = () => {
    setPage(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getMyBuyTrainingsAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <section className="my-purchases">
          <div className="container">
            <div className="my-purchases__wrapper">
              <Link className="btn-flat my-purchases__back" to={AppRoute.PersonalAccountUser}>
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </Link>
              <div className="my-purchases__title-wrapper">
                <h1 className="my-purchases__title">Мои покупки</h1>
                <div className="my-purchases__controls">
                  <div className="custom-toggle custom-toggle--switch custom-toggle--switch-right my-purchases__switch" data-validate-type="checkbox">
                    <label>
                      <input onChange={() => setIsActive(!isActive)} type="checkbox" value="user-agreement-1" name="user-agreement" />
                      <span className="custom-toggle__icon">
                        <svg width="9" height="6" aria-hidden="true">
                          <use xlinkHref="#arrow-check"></use>
                        </svg>
                      </span><span className="custom-toggle__label">Только активные</span>
                    </label>
                  </div>
                </div>
              </div>
              <ul className="my-purchases__list">
                {
                  viewTrainings
                    .map((training) => (
                      <li
                        key={`catalog-${training.id}`}
                        className="my-purchases__item"
                      >
                        <TrainingCard
                          training={training}
                        />
                      </li>
                    ))
                }
              </ul>
              <div className="show-more my-purchases__show-more">
                {
                  viewTrainings.length === MAX_COUNT_CARD_ON_PAGE ?
                    (<button onClick={handleNextClick} className="btn show-more__button show-more__button--more" type="button">Показать еще</button>) :
                    (<button onClick={handleBeginClick} className="btn show-more__button show-more__button--more" type="button">Вернуться в начало</button>)
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
