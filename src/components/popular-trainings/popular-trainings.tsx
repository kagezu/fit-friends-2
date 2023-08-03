import { Link } from 'react-router-dom';

export default function PopularTrainings(): JSX.Element {
  return (
    <section className="popular-trainings">
      <div className="container">
        <div className="popular-trainings__wrapper">
          <div className="popular-trainings__title-wrapper">
            <h2 className="popular-trainings__title">Популярные тренировки</h2>
            <button className="btn-flat popular-trainings__button" type="button"><span>Смотреть все</span>
              <svg width="14" height="10" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </button>
            <div className="popular-trainings__controls">
              <button className="btn-icon popular-trainings__control" type="button" aria-label="previous">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button className="btn-icon popular-trainings__control" type="button" aria-label="next">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="popular-trainings__list">
            <li className="popular-trainings__item">
              <div className="thumbnail-training">
                <div className="thumbnail-training__inner">
                  <div className="thumbnail-training__image">
                    <picture>
                      <source type="image/webp" srcSet="img/content/thumbnails/training-06.webp, img/content/thumbnails/training-06@2x.webp 2x" /><img src="img/content/thumbnails/training-06.jpg" srcSet="img/content/thumbnails/training-06@2x.jpg 2x" width="330" height="190" alt="" />
                    </picture>
                  </div>
                  <p className="thumbnail-training__price"><span className="thumbnail-training__price-value">1600</span><span>₽</span>
                  </p>
                  <h3 className="thumbnail-training__title">run, forrest, run</h3>
                  <div className="thumbnail-training__info">
                    <ul className="thumbnail-training__hashtags-list">
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#бег</span></div>
                      </li>
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#500ккал</span></div>
                      </li>
                    </ul>
                    <div className="thumbnail-training__rate">
                      <svg width="16" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="thumbnail-training__rate-value">5</span>
                    </div>
                  </div>
                  <div className="thumbnail-training__text-wrapper">
                    <p className="thumbnail-training__text">Узнайте правильную технику бега, развивайте выносливость и&nbsp;откройте для себя все секреты длительных пробежек.</p>
                  </div>
                  <div className="thumbnail-training__button-wrapper">
                    <Link className="btn btn--small thumbnail-training__button-catalog" to="#">Подробнее</Link>
                    <Link className="btn btn--small btn--outlined thumbnail-training__button-catalog" to="#">Отзывы</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="popular-trainings__item">
              <div className="thumbnail-training">
                <div className="thumbnail-training__inner">
                  <div className="thumbnail-training__image">
                    <picture>
                      <source type="image/webp" srcSet="img/content/thumbnails/training-07.webp, img/content/thumbnails/training-07@2x.webp 2x" /><img src="img/content/thumbnails/training-07.jpg" srcSet="img/content/thumbnails/training-07@2x.jpg 2x" width="330" height="190" alt="" />
                    </picture>
                  </div>
                  <p className="thumbnail-training__price"><span className="thumbnail-training__price-value">1600</span><span>₽</span>
                  </p>
                  <h3 className="thumbnail-training__title">fitball</h3>
                  <div className="thumbnail-training__info">
                    <ul className="thumbnail-training__hashtags-list">
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#пилатес</span></div>
                      </li>
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#200ккал</span></div>
                      </li>
                    </ul>
                    <div className="thumbnail-training__rate">
                      <svg width="16" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="thumbnail-training__rate-value">5</span>
                    </div>
                  </div>
                  <div className="thumbnail-training__text-wrapper">
                    <p className="thumbnail-training__text">Тренировка на&nbsp;фитболе&nbsp;&mdash; отличном тренажере для развития чувства баланса и&nbsp;равновесия, улучшения координации.</p>
                  </div>
                  <div className="thumbnail-training__button-wrapper">
                    <Link className="btn btn--small thumbnail-training__button-catalog" to="#">Подробнее</Link>
                    <Link className="btn btn--small btn--outlined thumbnail-training__button-catalog" to="#">Отзывы</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="popular-trainings__item">
              <div className="thumbnail-training">
                <div className="thumbnail-training__inner">
                  <div className="thumbnail-training__image">
                    <picture>
                      <source type="image/webp" srcSet="img/content/thumbnails/training-11.webp, img/content/thumbnails/training-11@2x.webp 2x" /><img src="img/content/thumbnails/training-11.jpg" srcSet="img/content/thumbnails/training-11@2x.jpg 2x" width="330" height="190" alt="" />
                    </picture>
                  </div>
                  <p className="thumbnail-training__price"><span className="thumbnail-training__price-value">2200</span><span>₽</span>
                  </p>
                  <h3 className="thumbnail-training__title">devil&apos;s cindy</h3>
                  <div className="thumbnail-training__info">
                    <ul className="thumbnail-training__hashtags-list">
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#кроссфит</span></div>
                      </li>
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#950ккал</span></div>
                      </li>
                    </ul>
                    <div className="thumbnail-training__rate">
                      <svg width="16" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="thumbnail-training__rate-value">5</span>
                    </div>
                  </div>
                  <div className="thumbnail-training__text-wrapper">
                    <p className="thumbnail-training__text">Знаменитый кроссфит комплекс. Синди&nbsp;&mdash; универсальная тренировка для развития функциональной силы.</p>
                  </div>
                  <div className="thumbnail-training__button-wrapper">
                    <Link className="btn btn--small thumbnail-training__button-catalog" to="#">Подробнее</Link>
                    <Link className="btn btn--small btn--outlined thumbnail-training__button-catalog" to="#">Отзывы</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="popular-trainings__item">
              <div className="thumbnail-training">
                <div className="thumbnail-training__inner">
                  <div className="thumbnail-training__image">
                    <picture>
                      <source type="image/webp" srcSet="img/content/thumbnails/training-09.webp, img/content/thumbnails/training-09@2x.webp 2x" /><img src="img/content/thumbnails/training-09.jpg" srcSet="img/content/thumbnails/training-09@2x.jpg 2x" width="330" height="190" alt="" />
                    </picture>
                  </div>
                  <p className="thumbnail-training__price"><span className="thumbnail-training__price-value">1800</span><span>₽</span>
                  </p>
                  <h3 className="thumbnail-training__title">full body stretch</h3>
                  <div className="thumbnail-training__info">
                    <ul className="thumbnail-training__hashtags-list">
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#стретчинг</span></div>
                      </li>
                      <li className="thumbnail-training__hashtags-item">
                        <div className="hashtag thumbnail-training__hashtag"><span>#400ккал</span></div>
                      </li>
                    </ul>
                    <div className="thumbnail-training__rate">
                      <svg width="16" height="16" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg><span className="thumbnail-training__rate-value">5</span>
                    </div>
                  </div>
                  <div className="thumbnail-training__text-wrapper">
                    <p className="thumbnail-training__text">Комплекс упражнений на&nbsp;растяжку всего тела для новичков. Плавное погружение в&nbsp;стретчинг и&nbsp;умеренная нагрузка.</p>
                  </div>
                  <div className="thumbnail-training__button-wrapper">
                    <Link className="btn btn--small thumbnail-training__button-catalog" to="#">Подробнее</Link>
                    <Link className="btn btn--small btn--outlined thumbnail-training__button-catalog" to="#">Отзывы</Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
