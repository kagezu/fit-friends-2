import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getReviews } from '../../store/selectors';
import { getReviewsAction } from '../../store/review/review-api-actions';
import { STATIC_PATH } from '../../const';

export default function FeedbackList({ trainingId }: { trainingId: string }): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trainingId) {
      dispatch(getReviewsAction(trainingId));
    }
  }, [dispatch, trainingId]);

  return (
    <aside className="reviews-side-bar">
      <button className="btn-flat btn-flat--underlined reviews-side-bar__back" type="button">
        <svg width="14" height="10" aria-hidden="true">
          <use xlinkHref="#arrow-left"></use>
        </svg><span>Назад</span>
      </button>
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
      <button className="btn btn--medium reviews-side-bar__button" type="button">Оставить отзыв</button>
    </aside>
  );
}