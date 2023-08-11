import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import TrainingCard from '../../components/training-card/training-card';
import TrainingFilter from '../../components/training-filter/training-filter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingFiltred } from '../../store/selectors';
import { getTrainingsAction } from '../../store/training/training-api-actions';
import { trainingFiltred } from '../../store/training/training-slice';
import { TrainingQuery } from '../../types/training-query';

const MAX_COUNT_CARD_ON_PAGE = 6;

export default function TrainingCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingFiltred);
  const [params, setParams] = useState<TrainingQuery>({});
  const [page, setPage] = useState<number>(0);

  const handleNextClick = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const handleBeginClick = () => {
    setPage(0);
    window.scrollTo(0, 0);
  };

  const handleChange = (query: TrainingQuery) => setParams(query);

  useEffect(() => {
    dispatch(getTrainingsAction({
      params: {
        ...params,
        limit: MAX_COUNT_CARD_ON_PAGE,
        page
      },
      trainingsAction: trainingFiltred
    }));
  }, [dispatch, page, params]);

  return (
    <>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог тренировок</h1>
              <TrainingFilter onChange={handleChange} />
              <div className="training-catalog">
                <ul className="training-catalog__list">
                  {
                    trainings
                      .map((training) => (
                        <li
                          key={`catalog-${training.id}`}
                          className="training-catalog__item"
                        >
                          <TrainingCard
                            training={training}
                          />
                        </li>
                      ))
                  }
                </ul>
                <div className="show-more training-catalog__show-more">
                  {
                    trainings.length === MAX_COUNT_CARD_ON_PAGE ?
                      (<button onClick={handleNextClick} className="btn show-more__button show-more__button--more" type="button">Показать еще</button>) :
                      (<button onClick={handleBeginClick} className="btn show-more__button show-more__button--more" type="button">Вернуться в начало</button>)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
