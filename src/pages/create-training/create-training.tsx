import { useState, useRef, ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError } from '../../store/selectors';
import { createTrainingAction } from '../../store/training/training-api-actions';
import { Gender, Intervals, TrainingLevel, TrainingType } from '../../const';
import { TrainingData } from '../../types/training-data';

export default function CreateTraining(): JSX.Element {
  const [request, setRequest] = useState<TrainingData>({
    usersGender: Gender.Unknown,
    specialOffer: false,
  });
  const [isTrainingTypeList, setIsTrainingTypeList] = useState(false);
  const [isTrainingLevelList, setIsTrainingLevelList] = useState(false);
  const [isIntervalList, setIsIntervalList] = useState(false);

  const submitRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLButtonElement>(null);
  const errors = useAppSelector(getError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOptionChange = (evt: SyntheticEvent<HTMLOptionElement>) => {
    const name = (evt.target as HTMLOptionElement).value;
    const value = (evt.target as HTMLOptionElement).label;
    setRequest({ ...request, [name]: value });
    setIsTrainingTypeList(false);
    setIsTrainingLevelList(false);
    setIsIntervalList(false);
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

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (request && submitRef.current) {
      submitRef.current.disabled = true;
      dispatch(createTrainingAction({ request, navigate }))
        .finally(() => {
          if (submitRef.current) {
            submitRef.current.disabled = false;
          }
        });
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className="popup-form popup-form--create-training">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Создание тренировки</h1>
              </div>
              <div className="popup-form__form">
                <form method="post" onSubmit={handleSubmit}>
                  <div className="create-training">
                    <div className="create-training__wrapper">
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Название тренировки</h2>
                        <div className="custom-input create-training__input">
                          <label>
                            <span className="custom-input__wrapper">
                              <input onChange={handleFormDataChange} type="text" name="title" required />
                            </span>
                          </label>
                        </div>
                        {errors.title ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.title}</span> : ''}
                      </div>
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Характеристики тренировки</h2>
                        <div className="create-training__info">
                          <div className={`custom-select
                              ${errors.trainingType ? ' custom-input--error' : ''}
                              ${request?.trainingType ? 'not-empty' : ' custom-select--not-selected'}
                              ${isTrainingTypeList ? 'is-open' : ''}
                              `}
                          >
                            <span className="custom-select__label">Выберите тип тренировки</span>
                            <button
                              onClick={() => setIsTrainingTypeList(!isTrainingTypeList)}
                              className="custom-select__button" type="button" aria-label="Выберите одну из опций"
                            >
                              <span className="custom-select__text">{request?.trainingType}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                              {
                                Object.values(TrainingType)
                                  .map((key: string) => (
                                    <option
                                      className='custom-select__item capitalize'
                                      key={key}
                                      value={'trainingType'}
                                      label={key}
                                      role='listitem'
                                      onClick={handleOptionChange}
                                    />
                                  ))
                              }
                            </ul>
                            {errors.trainingType ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.trainingType}</span> : ''}
                          </div>
                          <div className="custom-input custom-input--with-text-right">
                            <label><span className="custom-input__label">Сколько калорий потратим</span>
                              <span className="custom-input__wrapper">
                                <input onChange={handleFormDataChange} type="number" name="caloriesToBurn" value={request.caloriesToBurn} min={0} required />
                                <span className="custom-input__text">ккал</span>
                              </span>
                              {errors.caloriesToBurn ? (<span className="custom-input__error" style={{ opacity: 1 }}>{errors.caloriesToBurn}</span>) : ''}
                            </label>
                          </div>
                          <div className={`custom-select
                              ${errors.interval ? ' custom-input--error' : ''}
                              ${request?.interval ? 'not-empty' : ' custom-select--not-selected'}
                              ${isIntervalList ? 'is-open' : ''}
                              `}
                          >
                            <span className="custom-select__label">Сколько времени потратим</span>
                            <button
                              onClick={() => setIsIntervalList(!isIntervalList)}
                              className="custom-select__button" type="button" aria-label="Выберите одну из опций"
                            >
                              <span className="custom-select__text">{request?.interval}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                              {
                                Object.values(Intervals)
                                  .map((key: string) => (
                                    <option
                                      className='custom-select__item capitalize'
                                      key={key}
                                      value={'interval'}
                                      label={key}
                                      role='listitem'
                                      onClick={handleOptionChange}
                                    />
                                  ))
                              }
                            </ul>
                            {errors.interval ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.interval}</span> : ''}
                          </div>
                          <div className="custom-input custom-input--with-text-right">
                            <label><span className="custom-input__label">Стоимость тренировки</span>
                              <span className="custom-input__wrapper">
                                <input onChange={handleFormDataChange} type="number" name="price" value={request.price} min={0} required />
                                <span className="custom-input__text">₽</span>
                              </span>
                              {errors.price ? (<span className="custom-input__error" style={{ opacity: 1 }}>{errors.price}</span>) : ''}
                            </label>
                          </div>
                          <div className={`custom-select
                              ${errors.trainingLevel ? ' custom-input--error' : ''}
                              ${request?.trainingLevel ? 'not-empty' : ' custom-select--not-selected'}
                              ${isTrainingLevelList ? 'is-open' : ''}
                              `}
                          >
                            <span className="custom-select__label">Выберите уровень тренировки</span>
                            <button
                              onClick={() => setIsTrainingLevelList(!isTrainingLevelList)}
                              className="custom-select__button" type="button" aria-label="Выберите одну из опций"
                            >
                              <span className="custom-select__text">{request?.trainingLevel}</span>
                              <span className="custom-select__icon">
                                <svg width="15" height="6" aria-hidden="true">
                                  <use xlinkHref="#arrow-down"></use>
                                </svg>
                              </span>
                            </button>
                            <ul className="custom-select__list" role="listbox">
                              {
                                Object.values(TrainingLevel)
                                  .map((key: string) => (
                                    <option
                                      className='custom-select__item capitalize'
                                      key={key}
                                      value={'trainingLevel'}
                                      label={key}
                                      role='listitem'
                                      onClick={handleOptionChange}
                                    />
                                  ))
                              }
                            </ul>
                            {errors.trainingLevel ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.trainingLevel}</span> : ''}
                          </div>
                          <div className="create-training__radio-wrapper"><span className="create-training__label">Кому подойдет тренировка</span>
                            <br />
                            <div className="custom-toggle-radio create-training__radio">
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input onChange={handleFormDataChange} type="radio" name="gender" />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Мужчинам</span>
                                </label>
                              </div>
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input onChange={handleFormDataChange} type="radio" name="gender" />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Женщинам</span>
                                </label>
                              </div>
                              <div className="custom-toggle-radio__block">
                                <label>
                                  <input onChange={handleFormDataChange} type="radio" name="gender" defaultChecked />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">Всем</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="create-training__block">
                        <h2 className="create-training__legend">Описание тренировки</h2>
                        <div className="custom-textarea create-training__textarea">
                          <label>
                            <textarea onChange={handleFormDataChange} name="description" placeholder=" " required></textarea>
                          </label>
                        </div>
                        {errors.description ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.description}</span> : ''}
                      </div>
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
                      </div>
                    </div>
                    <button ref={submitRef} className="btn create-training__button" type="submit">Опубликовать</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </main >
    </>
  );
}
