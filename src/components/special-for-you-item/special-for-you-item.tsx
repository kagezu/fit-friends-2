import { Link } from 'react-router-dom';
import { Training } from '../../types/training';
import { AppRoute } from '../../const';

export default function SpecialForYouItem({ training }: { training: Training }): JSX.Element {
  return (
    <li className="special-for-you__item">
      <div className="thumbnail-preview">
        <div className="thumbnail-preview__image">
          <picture>
            <source
              type="image/webp"
              srcSet={`img/content/thumbnails/${training.background ?? ''}.webp, img/content/thumbnails/${training.background ?? ''}@2x.webp 2x`}
            />
            <img src={`img/content/thumbnails/${training.background ?? ''}.jpg`} srcSet={`img/content/thumbnails/${training.background ?? ''}@2x.jpg 2x`}
              width="452" height="191" alt=""
            />
          </picture>
        </div>
        <div className="thumbnail-preview__inner">
          <h3 className="thumbnail-preview__title">{training.trainingType}</h3>
          <div className="thumbnail-preview__button-wrapper">
            <Link
              className="btn btn--small thumbnail-preview__button"
              to={`../${AppRoute.TrainingCardUser}/${training.id}`}
            >Подробнее
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
