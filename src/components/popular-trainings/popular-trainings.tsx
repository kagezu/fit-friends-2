import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingPopular } from '../../store/selectors';
import PopularTrainingsItem from '../popular-trainings-item/popular-trainings-item';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getTrainingsAction } from '../../store/training/training-api-actions';
import { trainingPopular } from '../../store/training/training-slice';

const MAX_COUNT_ELEMENT = 4;
const MAX_COUNT_CARD = 9;

export default function PopularTrainings(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingPopular);
  const [position, setPosition] = useState<number>(0);
  const handleRightClick = () => setPosition(position + 1);
  const handleLeftClick = () => setPosition(position - 1);

  useEffect(() => {
    dispatch(getTrainingsAction({
      params: {
        category: 'rating',
        limit: MAX_COUNT_CARD
      },
      trainingsAction: trainingPopular
    }));
  }, [dispatch]);

  return (
    <section className="popular-trainings">
      <div className="container">
        <div className="popular-trainings__wrapper">
          <div className="popular-trainings__title-wrapper">
            <h2 className="popular-trainings__title">
              {trainings.length ? 'Популярные тренировки' : 'Скоро здесь появится что - то полезное'}
            </h2>
            <Link className="btn-flat popular-trainings__button" to={AppRoute.TrainingCatalog}>
              <span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </Link>
            <div className="popular-trainings__controls">
              <button
                className="btn-icon special-for-you__control"
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
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="next"
                onClick={handleRightClick}
                disabled={trainings?.length ? (position >= trainings?.length - MAX_COUNT_ELEMENT) : true}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="popular-trainings__list">
            {
              trainings
                .slice(position, position + MAX_COUNT_ELEMENT)
                .map((training) => (
                  <PopularTrainingsItem
                    key={`popular-${training.id}`}
                    training={training}
                  />
                ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
