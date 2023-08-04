import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLogo from '../../components/background-logo/background-logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError, getUser } from '../../store/selectors';
import { QuestionnaireData } from '../../types/questionnaire-data';
import { questionnaireAction } from '../../store/user/user-api-actions';
import { toUpperCaseFirst } from '../../utils/util';
import { MAX_TRAINING_TYPE } from '../../const';
import { TrainingLevel, Intervals, CaloriesToBurnLimit, CaloriesPerDayLimit, AppRoute, TrainingType } from '../../const';

export default function QuestionnaireUser(): JSX.Element {
  const errors = useAppSelector(getError);
  const user = useAppSelector(getUser);
  const [request, setRequest] = useState<QuestionnaireData>({
    trainingLevel: user.trainingLevel ?? TrainingLevel.Amateur,
    interval: user.interval ?? Intervals.Second,
    caloriesToBurn: user.caloriesToBurn ?? CaloriesToBurnLimit.Min,
    caloriesPerDay: user.caloriesPerDay ?? CaloriesPerDayLimit.Min
  });
  const [trainingTypes, setTrainingTypes] = useState<string[]>(user.trainingTypes ?? []);
  const submitRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isTrainingTypes = (value: string) => trainingTypes.some((item) => item === value);

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
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
        target: AppRoute.QuestionnaireUser,
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
                      {errors.trainingTypes ? <span className="custom-input__error">{errors.trainingTypes}</span> : ''}
                    </div>
                    <div className="questionnaire-user__block">
                      <span className="questionnaire-user__legend">Сколько времени вы готовы уделять на тренировку в день</span>
                      <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
                        {
                          Object
                            .values(Intervals)
                            .map((value) => (
                              <div key={value} className="custom-toggle-radio__block">
                                <label>
                                  <input
                                    onChange={handleFormDataChange}
                                    type="radio"
                                    name="interval"
                                    value={value}
                                    checked={value === request.interval}
                                  />
                                  <span className="custom-toggle-radio__icon"></span>
                                  <span className="custom-toggle-radio__label">{value}</span>
                                </label>
                              </div>
                            ))
                        }
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
                    <div className="questionnaire-user__block">
                      <div className="questionnaire-user__calories-lose"><span className="questionnaire-user__legend">Сколько калорий хотите сбросить</span>
                        <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                          <label>
                            <span className="custom-input__wrapper">
                              <input
                                onChange={handleFormDataChange}
                                type="number"
                                name="caloriesToBurn"
                                min={CaloriesToBurnLimit.Min}
                                max={CaloriesToBurnLimit.Max}
                                value={request.caloriesToBurn}
                              />
                              <span className="custom-input__text">ккал</span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="questionnaire-user__calories-waste"><span className="questionnaire-user__legend">Сколько калорий тратить в день</span>
                        <div className="custom-input custom-input--with-text-right questionnaire-user__input">
                          <label>
                            <span className="custom-input__wrapper">
                              <input
                                onChange={handleFormDataChange}
                                type="number"
                                name="caloriesPerDay"
                                min={CaloriesPerDayLimit.Min}
                                max={CaloriesPerDayLimit.Max}
                                value={request.caloriesPerDay}
                              />
                              <span className="custom-input__text">ккал</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button ref={submitRef} className="btn questionnaire-user__button" type="submit">Продолжить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
