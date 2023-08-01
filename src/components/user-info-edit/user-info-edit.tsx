import { useState, ChangeEvent, FormEvent } from 'react';
import { MAX_TRAINING_TYPE } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError, getUser } from '../../store/selectors';
import { Gender, TrainingLevel, TrainingType } from '../../types/enums';
import { QuestionnaireData } from '../../types/questionnaire-data';
import { toUpperCaseFirst } from '../../utils/util';
import Select from '../select/select';
import { locations } from '../../types/arrays';

export default function UserInfoEdit(): JSX.Element {
  const errors = useAppSelector(getError);
  const user = useAppSelector(getUser);
  const [request, setRequest] = useState<QuestionnaireData>({
    name: user.name,
    description: user.description ?? '',
    // avatar: string,
    gender: user.gender,
    location: user.location,
    trainingLevel: user.trainingLevel,
    readyForIndividualTraining: user.readyForIndividualTraining
  });
  const [trainingTypes, setTrainingTypes] = useState<string[]>(user.trainingTypes ?? []);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const isTrainingTypes = (value: string) => trainingTypes.some((item) => item === value);
  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };
  const handleSelectUpdate = (name: string, value: string) => {
    setRequest({ ...request, [name]: value });
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
    /*
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
    */
  };

  return (
    <section className="user-info-edit">
      <div className="user-info-edit__header">
        <div className="input-load-avatar">
          <label>
            <input className="visually-hidden" type="file" name="user-photo-1" accept="image/png, image/jpeg" />
            <span className="input-load-avatar__avatar">
              <img src="img/content/user-photo-1.png" srcSet="img/content/user-photo-1@2x.png 2x" width="98" height="98" alt="user" />
            </span>
          </label>
        </div>
        {
          isEdit ?
            <div className="user-info-edit__controls">
              <button className="user-info-edit__control-btn" aria-label="обновить">
                <svg width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-change"></use>
                </svg>
              </button>
              <button className="user-info-edit__control-btn" aria-label="удалить">
                <svg width="14" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-trash"></use>
                </svg>
              </button>
            </div> :
            <div></div>
        }
      </div>
      <form className="user-info-edit__form" action="#" method="post" onSubmit={handleSubmit}>
        {
          isEdit ?
            <button className="btn-flat btn-flat--underlined user-info-edit__save-button" type="submit" aria-label="Сохранить">
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg><span>Сохранить</span>
            </button> :
            <button onClick={() => setIsEdit(true)} className="btn-flat btn-flat--underlined user-info__edit-button" type="button" aria-label="Редактировать">
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg><span>Редактировать</span>
            </button>
        }
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title">Обо мне</h2>
          <div className="custom-input user-info-edit__input">
            <label>
              <span className="custom-input__label">Имя</span>
              <span className="custom-input__wrapper">
                <input
                  onChange={handleFormDataChange}
                  type="text"
                  name="name"
                  value={request.name}
                  readOnly={!isEdit}
                />
              </span>
            </label>
          </div>
          <div className="custom-textarea user-info-edit__textarea">
            <label>
              <span className="custom-textarea__label">Описание</span>
              <textarea
                onChange={handleFormDataChange}
                name="description"
                value={request.description}
                readOnly={!isEdit}
              >
              </textarea>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section user-info-edit__section--status">
          <h2 className="user-info-edit__title user-info-edit__title--status">Статус</h2>
          <div className="custom-toggle custom-toggle--switch user-info-edit__toggle">
            <label>
              <input
                onChange={handleCheckedChange}
                type="checkbox"
                name="readyForIndividualTraining"
                checked={request.readyForIndividualTraining}
                disabled={!isEdit}
              />
              <span className="custom-toggle__icon">
                <svg width="9" height="6" aria-hidden="true">
                  <use xlinkHref="#arrow-check"></use>
                </svg>
              </span>
              <span className="custom-toggle__label">Готов тренировать</span>
            </label>
          </div>
        </div>
        <div className="user-info-edit__section">
          <h2 className="user-info-edit__title user-info-edit__title--specialization">Специализация</h2>
          <div className="specialization-checkbox user-info-edit__specialization">
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
                        disabled={!isEdit}
                      />
                      <span className="btn-checkbox__btn">{toUpperCaseFirst(value)}</span>
                    </label>
                  </div>
                ))
            }
            {errors.trainingTypes ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.trainingTypes}</span> : ''}
          </div>
        </div>
        <Select
          text={'Локация'}
          name={'location'}
          value={request.location}
          error={errors.location}
          options={locations}
          onUpdate={handleSelectUpdate}
          disabled={!isEdit}
        />
        <Select
          text={'Пол'}
          name={'gender'}
          value={request.gender}
          error={errors.gender}
          options={Object.values(Gender)}
          onUpdate={handleSelectUpdate}
          disabled={!isEdit}
        />
        <Select
          text={'Уровень'}
          name={'trainingLevel'}
          value={request.trainingLevel}
          error={errors.trainingLevel}
          options={Object.values(TrainingLevel)}
          onUpdate={handleSelectUpdate}
          disabled={!isEdit}
        />
      </form>
    </section>
  );
}
