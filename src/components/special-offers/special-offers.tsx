import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingOffers } from '../../store/selectors';
import { getTrainingsAction } from '../../store/training/training-api-actions';
import { trainingOffers } from '../../store/training/training-slice';

const MAX_COUNT_CARD = 3;

export default function SpecialOffers(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingOffers);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    dispatch(getTrainingsAction({
      params: {
        specialOffer: true,
        limit: MAX_COUNT_CARD
      },
      trainingsAction: trainingOffers
    }));
  }, [dispatch]);

  return (
    <section className="special-offers">
      <div className="container">
        <div className="special-offers__wrapper">
          <h2 className="visually-hidden">Специальные предложения</h2>
          {
            trainings.length ? (
              <ul className="special-offers__list">
                <li className="special-offers__item is-active">
                  <aside className="promo-slider">
                    <div className="promo-slider__overlay"></div>
                    <div className="promo-slider__image">
                      <img src={`img/content/thumbnails/${trainings[position].background}.jpg`}
                        width="1040" height="469" alt="promo"
                      />
                    </div>
                    <div className="promo-slider__header">
                      <h3 className="promo-slider__title">{trainings[position].trainingType}</h3>
                      <div className="promo-slider__logo">
                        <svg width="74" height="74" aria-hidden="true">
                          <use xlinkHref="#logotype"></use>
                        </svg>
                      </div>
                    </div><span className="promo-slider__text">{trainings[position].title}</span>
                    <div className="promo-slider__bottom-container">
                      <div className="promo-slider__slider-dots">
                        {
                          trainings.map((item, index) => (
                            <button
                              onClick={() => setPosition(index)}
                              key={`button-${item.id}`}
                              className={
                                index === position ?
                                  'promo-slider__slider-dot--active promo-slider__slider-dot' :
                                  'promo-slider__slider-dot'
                              }
                              aria-label={`${index + 1} слайд`}
                            >
                            </button>
                          ))
                        }
                      </div>
                      <div className="promo-slider__price-container">
                        <p className="promo-slider__price">{trainings[position].price} ₽</p>
                        <p className="promo-slider__sup">за занятие</p>
                        <p className="promo-slider__old-price">{trainings[position].price} ₽</p>
                      </div>
                    </div>
                  </aside>
                </li>
              </ul>) : null
          }
          <div className="thumbnail-spec-gym">
            <div className="thumbnail-spec-gym__image">
              <picture>
                <source type="image/webp" srcSet="img/content/thumbnails/nearest-gym-01.webp, img/content/thumbnails/nearest-gym-01@2x.webp 2x" /><img src="img/content/thumbnails/nearest-gym-01.jpg" srcSet="img/content/thumbnails/nearest-gym-01@2x.jpg 2x" width="330" height="190" alt="" />
              </picture>
            </div>
            <p className="thumbnail-spec-gym__type">Ближайший зал</p>
            <div className="thumbnail-spec-gym__header">
              <h3 className="thumbnail-spec-gym__title">Скоро здесь появится что - то полезное</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
