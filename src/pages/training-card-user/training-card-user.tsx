/* eslint-disable */
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getTraining } from '../../store/selectors';
import { useEffect, useState } from 'react';
import { getTrainingAction } from '../../store/training/training-api-actions';
import FeedbackList from '../../components/feedback-list/feedback-list';
import { STATIC_PATH } from '../../const';
import PopupBuy from '../../components/popup-buy/popup-buy';

export default function TrainingCardUser(): JSX.Element {
  const [isViewPopup, setIsViewPopup] = useState<boolean>(false);
  const { id } = useParams();
  const training = useAppSelector(getTraining);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getTrainingAction({ id, navigate }));
    }
  }, [dispatch, navigate, id]);

  if (!id || !training) {
    return <div></div>;
  }
  return isViewPopup ? (<PopupBuy training={training} />) : (
    <>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Карточка тренировки</h1>
              <FeedbackList trainingId={id} />
              <div className="training-card">
                <div className="training-info">
                  <h2 className="visually-hidden">Информация о тренировке</h2>
                  <div className="training-info__header">
                    <div className="training-info__coach">
                      <div className="training-info__photo">
                        <picture>
                          <img src={training.coach?.avatar ? `${STATIC_PATH}${training.coach?.avatar}` : ''} width="64" height="64" alt="Изображение тренера" />
                        </picture>
                      </div>
                      <div className="training-info__coach-info"><span className="training-info__label">Тренер</span>
                        <span className="training-info__name">{training.coach?.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="training-info__main-content">
                    <form action="#" method="get">
                      <div className="training-info__form-wrapper">
                        <div className="training-info__info-wrapper">
                          <div className="training-info__input training-info__input--training">
                            <label><span className="training-info__label">Название тренировки</span>
                              <input type="text" name="training" value={training.title} disabled />
                            </label>
                            <div className="training-info__error">Обязательное поле</div>
                          </div>
                          <div className="training-info__textarea">
                            <label><span className="training-info__label">Описание тренировки</span>
                              <textarea name="description" value={training.description} readOnly />
                            </label>
                          </div>
                        </div>
                        <div className="training-info__rating-wrapper">
                          <div className="training-info__input training-info__input--rating">
                            <label><span className="training-info__label">Рейтинг</span>
                              <span className="training-info__rating-icon">
                                <svg width="18" height="18" aria-hidden="true">
                                  <use xlinkHref="#icon-star"></use>
                                </svg>
                              </span>
                              <input type="number" name="rating" value={training.rating.toFixed()} disabled />
                            </label>
                          </div>
                          <ul className="training-info__list">
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{training.trainingType}</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{training.usersGender}</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{training.caloriesToBurn}ккал</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{training.interval}</span></div>
                            </li>
                          </ul>
                        </div>
                        <div className="training-info__price-wrapper">
                          <div className="training-info__input training-info__input--price">
                            <label><span className="training-info__label">Стоимость</span>
                              <input type="text" name="price" value={`${training.price} ₽`} disabled />
                            </label>
                          </div>
                          <button onClick={() => setIsViewPopup(true)} className="btn training-info__buy" type="button">Купить</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="training-video">
                  <h2 className="training-video__title">Видео</h2>
                  <div className="training-video__video">
                    <div className="training-video__thumbnail">
                      <picture>
                        <source type="image/webp" srcSet="/img/content/training-video/video-thumbnail.webp, /img/content/training-video/video-thumbnail@2x.webp 2x" />
                        <img src="/img/content/training-video/video-thumbnail.png" srcSet="/img/content/training-video/video-thumbnail@2x.png 2x" width="922" height="566" alt="Обложка видео" />
                      </picture>
                    </div>
                    <button className="training-video__play-button btn-reset">
                      <svg width="18" height="30" aria-hidden="true">
                        <use xlinkHref="#icon-arrow"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="training-video__buttons-wrapper">
                    <button className="btn training-video__button training-video__button--start" type="button" disabled>Приступить</button>
                    <button className="btn training-video__button training-video__button--stop" type="button">Закончить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
