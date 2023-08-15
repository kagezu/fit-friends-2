import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute, Sort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import { getTrainingFiltred } from '../../store/selectors';
import { getMyTrainingsAction } from '../../store/training/training-api-actions';
import { trainingFiltred } from '../../store/training/training-slice';
import MyOrderCard from '../../components/my-order-card/my-order-card';

const MAX_COUNT_CARD_ON_PAGE = 4;
enum TrainingCategory {
  TotalSale = 'totalSale',
  TotalAmount = 'totalAmount'
}

export default function MyOrders(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingFiltred);
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState(true);
  const [category, setCategory] = useState<TrainingCategory>(TrainingCategory.TotalSale);

  const handleSumClick = () => {
    if (category !== TrainingCategory.TotalAmount) {
      setCategory(TrainingCategory.TotalAmount);
    } else {
      setSort(!sort);
    }
    setPage(0);
  };
  const handleCountClick = () => {
    if (category !== TrainingCategory.TotalSale) {
      setCategory(TrainingCategory.TotalSale);
    } else {
      setSort(!sort);
    }
    setPage(0);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handleBeginClick = () => {
    setPage(0);
  };

  useEffect(() => {
    dispatch(getMyTrainingsAction({
      params: {
        sortDirection: sort ? Sort.Desc : Sort.Asc,
        category,
        limit: MAX_COUNT_CARD_ON_PAGE,
        page
      },
      trainingsAction: trainingFiltred
    }));
  }, [dispatch, page, category, sort]);

  return (
    <>
      <Header />
      <main>
        <section className="my-orders">
          <div className="container">
            <div className="my-orders__wrapper">
              <Link className="btn-flat btn-flat--underlined my-orders__back" to={AppRoute.PersonalAccountCoach}>
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
                <span>Назад</span>
              </Link>
              <div className="my-orders__title-wrapper">
                <h1 className="my-orders__title">Мои заказы</h1>
                <div className="sort-for">
                  <p>Сортировать по:</p>
                  <div className="sort-for__btn-container">
                    <button onClick={handleSumClick} className="btn-filter-sort" type="button"><span>Сумме</span>
                      <svg width="16" height="10" aria-hidden="true">
                        <use xlinkHref={sort ? '#icon-sort-up' : '#icon-sort-down'}></use>
                      </svg>
                    </button>
                    <button onClick={handleCountClick} className="btn-filter-sort" type="button"><span>Количеству</span>
                      <svg width="16" height="10" aria-hidden="true">
                        <use xlinkHref={sort ? '#icon-sort-up' : '#icon-sort-down'}></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="my-orders__list">
                {
                  trainings
                    .map((training) => (
                      <li
                        key={`catalog-${training.id}`}
                        className="training-catalog__item"
                      >
                        <MyOrderCard
                          training={training}
                        />
                      </li>
                    ))
                }
              </ul>
              <div className="show-more my-orders__show-more">
                {
                  trainings.length === MAX_COUNT_CARD_ON_PAGE ?
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
