import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getError, getTraining } from '../../store/selectors';
import FeedbackList from '../../components/feedback-list/feedback-list';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import { getTrainingAction, updateTrainingAction } from '../../store/training/training-api-actions';
import { STATIC_PATH } from '../../const';
import VideoPlayer from '../../components/video-player/video-player';
import { TrainingData } from '../../types/training-data';
import { responseError } from '../../store/error/error-process';

const SALE_FACTOR = .9;

export default function TrainingCardCoach(): JSX.Element {
  const [request, setRequest] = useState<TrainingData>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isVideoEdit, setIsVideoEdit] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();
  const training = useAppSelector(getTraining);
  const errors = useAppSelector(getError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLSpanElement>(null);

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };

  const handleVideoChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && videoRef.current) {
      const file = evt.target.files[0];
      setRequest({ ...request, video: file });
      videoRef.current.innerHTML = file.name;
    }
  };

  const handleSpecialClick = () => {
    if (request?.price) {
      setRequest({
        ...request,
        specialOffer: true,
        price: +(request?.price * SALE_FACTOR).toFixed()
      });
    }
  };

  const handleSubmit = () => {
    if (request && id) {
      dispatch(updateTrainingAction({ request, id }));
    }
  };

  useEffect(() => {
    setRequest({
      price: training.price,
      title: training.title,
      description: training.description,
      specialOffer: training.specialOffer
    });
  }, [training]);

  useEffect(() => {
    if (!errors.error) {
      setIsEdit(false);
      setIsVideoEdit(false);
    }
  }, [dispatch, errors]);

  useEffect(() => {
    if (id) {
      dispatch(getTrainingAction({ id, navigate }));
    }
  }, [dispatch, navigate, id]);

  if (!id || !training.id) {
    return <div></div>;
  }
  return (
    <>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Карточка тренировки</h1>
              <FeedbackList trainingId={id} />
              <div className="training-card training-card--edit">
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
                    {
                      isEdit ?
                        <button onClick={handleSubmit}
                          className="btn-flat btn-flat--light btn-flat--underlined training-info__edit training-info__edit--save" type="button"
                        >
                          <svg width="12" height="12" aria-hidden="true">
                            <use xlinkHref="#icon-edit"></use>
                          </svg><span>Сохранить</span>
                        </button> :
                        <button onClick={() => setIsEdit(true)}
                          className="btn-flat btn-flat--light btn-flat--underlined training-info__edit training-info__edit--save" type="button"
                        >
                          <svg width="12" height="12" aria-hidden="true">
                            <use xlinkHref="#icon-edit"></use>
                          </svg><span>Редактировать</span>
                        </button>
                    }
                  </div>
                  <div className="training-info__main-content">
                    <form action="#" method="get">
                      <div className="training-info__form-wrapper">
                        <div className="training-info__info-wrapper">
                          <div className="training-info__input training-info__input--training">
                            <label><span className="training-info__label">Название тренировки</span>
                              <input onChange={handleFormDataChange} type="text" name="title" value={request?.title ?? ''} disabled={!isEdit} />
                            </label>
                            {errors.title ? <div className="training-info__error" style={{ opacity: 1 }}>{errors.title}</div> : ''}
                          </div>
                          <div className="training-info__textarea">
                            <label><span className="training-info__label">Описание тренировки</span>
                              <textarea onChange={handleFormDataChange} name="description" value={request?.description ?? ''} disabled={!isEdit}></textarea>
                            </label>
                            {errors.description ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.description}</span> : ''}
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
                              <input type="number" name="rating" value={training.rating.toFixed() ?? ''} disabled />
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
                            <label><span className="training-info__label">Стоимость, ₽</span>
                              <input onChange={handleFormDataChange} type="number" name="price" value={request?.price ?? ''} disabled={!isEdit} min={0} />
                            </label>
                            {errors.price ? <div className="custom-input__error" style={{ opacity: 1 }}>{errors.price}</div> : ''}
                          </div>
                          <button
                            className="btn-flat btn-flat--light btn-flat--underlined training-info__discount" type="button" disabled={!isEdit}
                            onClick={handleSpecialClick}
                          >
                            <svg width="14" height="14" aria-hidden="true">
                              <use xlinkHref="#icon-discount"></use>
                            </svg>
                            <span>Сделать скидку 10%</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="training-video">
                  <h2 className="training-video__title">Видео</h2>
                  {!isVideoEdit ?
                    (
                      <div className="training-video__video">
                        <div className="training-video__thumbnail">
                          <VideoPlayer
                            isPlaying={isPlaying}
                            src={`${STATIC_PATH}${training.demoVideo}`}
                            previewImage={`${STATIC_PATH}${training.background}`}
                            width={922}
                            height={566}
                          />
                        </div>
                        <button
                          className="training-video__play-button btn-reset"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          <svg width="18" height="30" aria-hidden="true">
                            <use xlinkHref="#icon-arrow"></use>
                          </svg>
                        </button>
                      </div>) :
                    (
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Загрузите видео-тренировку</h2>
                        <div className="drag-and-drop create-training__drag-and-drop">
                          <label>
                            <span ref={videoRef} className="drag-and-drop__label" tabIndex={0}>Загрузите сюда файлы формата MOV, AVI или MP4
                              <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="#icon-import-video"></use>
                              </svg>
                            </span>
                            <input onChange={handleVideoChange} type="file" name="video" tabIndex={-1} accept=".mov, .avi, .mp4" />
                          </label>
                        </div>
                        {errors.video ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.video}</span> : ''}
                      </div>)}
                  <div className="training-video__buttons-wrapper">
                    <div className="training-video__edit-buttons">
                      <button onClick={handleSubmit} className="btn" type="button" disabled={!isVideoEdit}>Сохранить</button>
                      <button onClick={() => { setIsVideoEdit(true); }} className="btn btn--outlined" type="button">Удалить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >
    </>
  );
}
