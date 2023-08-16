import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError } from '../../store/selectors';
import { ReviewData } from '../../types/review-data';
import { ESCAPE_KEY } from '../../const';
import { createReviewsAction } from '../../store/review/review-api-actions';

const DEFAULT_EVALUATION = 5;

export default function PopupFeedback({ trainingId, onClose }: { trainingId: string; onClose: () => void }): JSX.Element {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);
  const [request, setRequest] = useState<ReviewData>({
    training: trainingId,
    evaluation: DEFAULT_EVALUATION,
    textReview: ''
  });
  const errors = useAppSelector(getError);
  const dispatch = useAppDispatch();

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    setIsSubmitDisabled(false);
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitDisabled(true);
    dispatch(createReviewsAction(request));
  };

  const handleEscapeKeydown = (evt: KeyboardEvent) => {
    if (evt.key === ESCAPE_KEY) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeydown);
    document.body.classList.add('scroll-lock-ios');
    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
      document.body.classList.remove('scroll-lock-ios');
    };
  });

  return (
    <main>
      <div className="popup-form">
        <section className="popup">
          <div className="popup__wrapper">
            <div className="popup-head">
              <h2 className="popup-head__header">Оставить отзыв</h2>
              <button onClick={onClose} className="btn-icon btn-icon--outlined btn-icon--big" type="button" aria-label="close">
                <svg width="20" height="20" aria-hidden="true">
                  <use xlinkHref="#icon-cross"></use>
                </svg>
              </button>
            </div>
            <div className="popup__content popup__content--feedback">
              <h3 className="popup__feedback-title">Оцените тренировку</h3>
              <ul className="popup__rate-list">
                <li className="popup__rate-item">
                  <div className="popup__rate-item-wrap">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="evaluation" aria-label="оценка 1." value="1" /><span className="popup__rate-number">1</span>
                    </label>
                  </div>
                </li>
                <li className="popup__rate-item">
                  <div className="popup__rate-item-wrap">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="evaluation" aria-label="оценка 2." value="2" /><span className="popup__rate-number">2</span>
                    </label>
                  </div>
                </li>
                <li className="popup__rate-item">
                  <div className="popup__rate-item-wrap">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="evaluation" aria-label="оценка 3." value="3" /><span className="popup__rate-number">3</span>
                    </label>
                  </div>
                </li>
                <li className="popup__rate-item">
                  <div className="popup__rate-item-wrap">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="evaluation" aria-label="оценка 4." value="4" /><span className="popup__rate-number">4</span>
                    </label>
                  </div>
                </li>
                <li className="popup__rate-item">
                  <div className="popup__rate-item-wrap">
                    <label>
                      <input onChange={handleFormDataChange} type="radio" name="evaluation" aria-label="оценка 5." value="5" defaultChecked /><span className="popup__rate-number">5</span>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="popup__feedback">
                <h3 className="popup__feedback-title popup__feedback-title--text">Поделитесь своими впечатлениями о тренировке</h3>
                <div className="popup__feedback-textarea">
                  <div className="custom-textarea">
                    <label>
                      <textarea onChange={handleFormDataChange} name="textReview" placeholder=" "></textarea>
                    </label>
                  </div>
                  {errors.textReview ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.textReview}</span> : ''}
                  {errors.message ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.message}</span> : ''}
                </div>
              </div>
              <div className="popup__button">
                <button onClick={handleSubmit} className="btn" type="button" disabled={isSubmitDisabled}>Продолжить</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
