import { Link } from 'react-router-dom';
import { Training } from '../../types/training';
import { AppRoute } from '../../const';

const COUNT_DIGIT = 1;

export default function MyOrderCard({ training }: { training: Training }): JSX.Element {
  return (
    <div className="thumbnail-training">
      <div className="thumbnail-training__inner">
        <div className="thumbnail-training__image">
          <picture>
            <source
              type="image/webp"
              srcSet={`/img/content/thumbnails/${training.background ?? ''}.webp, /img/content/thumbnails/${training.background ?? ''}@2x.webp 2x`}
            />
            <img src={`/img/content/thumbnails/${training.background ?? ''}.jpg`} srcSet={`/img/content/thumbnails/${training.background ?? ''}@2x.jpg 2x`}
              width="330" height="190" alt=""
            />
          </picture>
        </div>
        <p className="thumbnail-training__price">
          {
            training.price ?
              <><span className="thumbnail-training__price-value">{training.price}</span><span>₽</span></> :
              <span className="thumbnail-training__price-value">Бесплатно</span>
          }
        </p>
        <h3 className="thumbnail-training__title">{training.title}</h3>
        <div className="thumbnail-training__info">
          <ul className="thumbnail-training__hashtags-list">
            <li className="thumbnail-training__hashtags-item">
              <div className="hashtag thumbnail-training__hashtag"><span>{training.trainingType}</span></div>
            </li>
            <li className="thumbnail-training__hashtags-item">
              <div className="hashtag thumbnail-training__hashtag"><span>{training.caloriesToBurn}</span></div>
            </li>
          </ul>
          <div className="thumbnail-training__rate">
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg><span className="thumbnail-training__rate-value">{training.rating.toFixed(COUNT_DIGIT)}</span>
          </div>
        </div>
        <div className="thumbnail-training__text-wrapper">
          <p className="thumbnail-training__text">{training.description}</p>
        </div>
        <Link className="btn-flat btn-flat--underlined thumbnail-training__button-orders" to={`../${AppRoute.TrainingCardCoach}/${training.id}`}>
          <svg width="18" height="18" aria-hidden="true">
            <use xlinkHref="#icon-info"></use>
          </svg><span>Подробнее</span>
        </Link>
      </div>
      <div className="thumbnail-training__total-info">
        <div className="thumbnail-training__total-info-card">
          <svg width="32" height="32" aria-hidden="true">
            <use xlinkHref="#icon-chart"></use>
          </svg>
          <p className="thumbnail-training__total-info-value">{training.totalSale}</p>
          <p className="thumbnail-training__total-info-text">Куплено тренировок</p>
        </div>
        <div className="thumbnail-training__total-info-card">
          <svg width="31" height="28" aria-hidden="true">
            <use xlinkHref="#icon-wallet"></use>
          </svg>
          <p className="thumbnail-training__total-info-value">{training.totalAmount?.toLocaleString()}<span>₽</span></p>
          <p className="thumbnail-training__total-info-text">Общая сумма</p>
        </div>
      </div>
    </div>
  );
}
