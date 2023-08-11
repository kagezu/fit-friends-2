import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingSpecial, getUser } from '../../store/selectors';
import { useEffect, useState } from 'react';
import SpecialForYouItem from '../special-for-you-item/special-for-you-item';
import { getTrainingsAction } from '../../store/training/training-api-actions';
import { trainingSpecialForYou } from '../../store/training/training-slice';

const MAX_COUNT_ELEMENT = 3;
const MAX_COUNT_SPECIAL_CARD = 9;

export default function SpecialForYou(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const trainings = useAppSelector(getTrainingSpecial);
  const [position, setPosition] = useState<number>(0);
  const handleRightClick = () => setPosition(position + 1);
  const handleLeftClick = () => setPosition(position - 1);

  useEffect(() => {
    dispatch(getTrainingsAction({
      params: {
        trainingType: user.trainingTypes?.join(','),
        trainingLevel: user.trainingLevel,
        limit: MAX_COUNT_SPECIAL_CARD
      },
      trainingsAction: trainingSpecialForYou
    }));
  }, [dispatch, user]);

  return (
    <section className="special-for-you">
      <div className="container">
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">
              {trainings.length ? 'Специально подобрано для вас' : 'Скоро здесь появится что - то полезное'}
            </h2>
            <div className="special-for-you__controls">
              <button
                onClick={handleLeftClick}
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="previous"
                disabled={!position}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button
                onClick={handleRightClick}
                className="btn-icon special-for-you__control"
                type="button"
                aria-label="next"
                disabled={trainings?.length ? (position >= trainings?.length - MAX_COUNT_ELEMENT) : true}
              >
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="special-for-you__list">
            {
              trainings
                .slice(position, position + MAX_COUNT_ELEMENT)
                .map((training) => (
                  <SpecialForYouItem
                    key={`special-${training.id}`}
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
