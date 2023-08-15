import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getReviews } from '../../store/selectors';
import { getReviewsAction } from '../../store/review/review-api-actions';
import { AppRoute, STATIC_PATH } from '../../const';
import PopupFeedback from '../popup-feedback/popup-feedback';
import { responseError } from '../../store/error/error-process';
import { Link } from 'react-router-dom';

export default function FeedbackList({ trainingId, count }: { trainingId: string; count?: number }): JSX.Element {
  const [isViewPopup, setIsViewPopup] = useState<boolean>(false);
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trainingId && !isViewPopup) {
      dispatch(getReviewsAction(trainingId));
      dispatch(responseError({}));
    }
  }, [dispatch, trainingId, isViewPopup]);

  return (
    <>
      {isViewPopup ? <PopupFeedback trainingId={trainingId} onClose={() => setIsViewPopup(false)} /> : null}
      <aside className="reviews-side-bar">
        <Link className="btn-flat btn-flat--underlined user-catalog-form__btnback" to={AppRoute.TrainingCatalog}>
          <svg width="14" height="10" aria-hidden="true">
            <use xlinkHref="#arrow-left"></use>
          </svg><span>Назад</span>
        </Link>
        <h2 className="reviews-side-bar__title">Отзывы</h2>
        <ul className="reviews-side-bar__list">
          {
            reviews
              .map(({ id, name, avatar, textReview, evaluation }) => (
                <li key={id} className="reviews-side-bar__item">
                  <div className="review">
                    <div className="review__user-info">
                      <div className="review__user-photo">
                        <picture>
                          <img src={avatar ? `${STATIC_PATH}${avatar}` : ''} width="64" height="64" alt="Изображение пользователя" />
                        </picture>
                      </div>
                      <span className="review__user-name">{name}</span>
                      <div className="review__rating">
                        <svg width="16" height="16" aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <span>{evaluation}</span>
                      </div>
                    </div>
                    <p className="review__comment">{textReview}</p>
                  </div>
                </li>
              ))
          }
        </ul>
        <button onClick={() => setIsViewPopup(true)}
          className="btn btn--medium reviews-side-bar__button" type="button" disabled={!count || isViewPopup}
        >Оставить отзыв
        </button>
      </aside>
    </>
  );
}
