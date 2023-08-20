import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLogo from '../../components/background-logo/background-logo';
import { TrainingLevel, AppRoute, TrainingType, ResumeLimit } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError, getUser } from '../../store/selectors';
import { questionnaireAction } from '../../store/user/user-api-actions';
import { QuestionnaireData } from '../../types/questionnaire-data';
import { toUpperCaseFirst } from '../../utils/util';
import { MAX_TRAINING_TYPE } from '../../const';

export default function QuestionnaireCoach(): JSX.Element {
  const errors = useAppSelector(getError);
  const user = useAppSelector(getUser);
  const [request, setRequest] = useState<QuestionnaireData>({
    trainingLevel: user.trainingLevel ?? TrainingLevel.Amateur,
    resume: user.resume ?? '',
    readyForIndividualTraining: user.readyForIndividualTraining ?? true
  });
  const [trainingTypes, setTrainingTypes] = useState<string[]>(user.trainingTypes ?? []);
  const submitRef = useRef<HTMLButtonElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCertificateChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && certificateRef.current) {
      const file = evt.target.files[0];
      setRequest({ ...request, certificate: file });
      certificateRef.current.innerHTML = file.name;
      dispatch(responseError({ ...errors, certificate: '' }));
    }
  };

  const isTrainingTypes = (value: string) => trainingTypes.some((item) => item === value);

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };

  const handleCheckedChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.checked });
  };

  const handleTrainingTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (evt.target.checked && trainingTypes?.length < MAX_TRAINING_TYPE) {
      setTrainingTypes([...trainingTypes, value]);
      if (errors.trainingTypes) {
        dispatch(responseError({ ...errors, trainingTypes: '' }));
      }
    } else {
      setTrainingTypes(trainingTypes.filter((item) => item !== value));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (request && submitRef.current) {
      submitRef.current.disabled = true;
      dispatch(questionnaireAction({
        request: { ...request, trainingTypes: trainingTypes.join(',') },
        target: AppRoute.QuestionnaireCoach,
        navigate
      }))
        .finally(() => {
          if (submitRef.current) {
            submitRef.current.disabled = false;
          }
        });
    }
  };

  return (
    <main>
      <BackgroundLogo />
      <div className="popup-form popup-form--questionnaire-user">
        <div className="popup-form__wrapper">
          <div className="popup-form__content">
            <div className="popup-form__form">
              <form method="post" onSubmit={handleSubmit}>
                <div className="questionnaire-user">
                  <h1 className="visually-hidden">Опросник</h1>
                  <div className="questionnaire-user__wrapper">
                    <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Ваша специализация (тип) тренировок</span>
                      <div className="specialization-checkbox questionnaire-user__specializations">
                        {
                          Object
                            .values(TrainingType)
                            .map((value) => (
                              <div key={value} className="btn-checkbox">
                                <label>
                                  <input
                                    className="visually-hidden"
                                    type="checkbox"
                                    name="trainingTypes"
                                    value={value}
                                    checked={isTrainingTypes(value)}
                                    onChange={handleTrainingTypeChange}
                                  />
                                  <span className="btn-checkbox__btn">{toUpperCaseFirst(value)}</span>
                                </label>
                              </div>
                            ))
                        }
                        {errors.trainingTypes ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.trainingTypes}</span> : ''}
                      </div>
                    </div>
                    <div className="questionnaire-user__block"><span className="questionnaire-user__legend">Ваш уровень</span>
                      <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                        {
                          Object
                            .values(TrainingLevel)
                            .map((value) => (
                              <div key={value} className="custom-toggle-radio__block">
                                <label>
                                  <input
                                    onChange={handleFormDataChange}
                                    type="radio"
                                    name="trainingLevel"
                                    value={value}
                                    checked={value === request.trainingLevel}
                                  />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">{toUpperCaseFirst(value)}</span>
                                </label>
                              </div>
                            ))
                        }
                      </div>
                    </div>
                    <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
                      <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                        <label>
                          <span ref={certificateRef} className="drag-and-drop__label" tabIndex={0}>
                            Загрузите сюда файлы формата PDF, JPG или PNG
                            <svg width="20" height="20" aria-hidden="true">
                              <use xlinkHref="#icon-import"></use>
                            </svg>
                          </span>
                          <input
                            onChange={handleCertificateChange}
                            type="file"
                            name="certificate"
                            tabIndex={-1}
                            accept="image/png, image/jpeg, application/pdf"
                          />
                          {errors.certificate ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.certificate}</span> : ''}
                        </label>
                      </div>
                    </div>
                    <div className="questionnaire-coach__block">
                      <span className="questionnaire-coach__legend">Расскажите о своём опыте, который мы сможем проверить</span>
                      <div className={errors.resume ?
                        'custom-textarea questionnaire-coach__textarea custom-textarea__error' :
                        'custom-textarea questionnaire-coach__textarea'}
                      >
                        <label>
                          <textarea
                            onChange={handleFormDataChange}
                            value={request.resume}
                            name="resume"
                            minLength={ResumeLimit.Min}
                            maxLength={ResumeLimit.Max}
                            required
                          >
                          </textarea>
                          {errors.resume ? <span className="custom-textarea__error" style={{ opacity: 1 }}>{errors.resume}</span> : ''}
                        </label>
                      </div>
                      <div className="questionnaire-coach__checkbox">
                        <label>
                          <input
                            onChange={handleCheckedChange}
                            type="checkbox"
                            name="readyForIndividualTraining"
                            checked={request.readyForIndividualTraining}
                          />
                          <span className="questionnaire-coach__checkbox-icon">
                            <svg width="9" height="6" aria-hidden="true">
                              <use xlinkHref="#arrow-check"></use>
                            </svg>
                          </span>
                          <span className="questionnaire-coach__checkbox-label">Хочу дополнительно индивидуально тренировать</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button ref={submitRef} className="btn questionnaire-coach__button" type="submit">Продолжить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
