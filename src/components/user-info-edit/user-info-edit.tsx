import { useState, ChangeEvent, useEffect, useRef, SyntheticEvent } from 'react';
import { MAX_TRAINING_TYPE, Role, STATIC_PATH } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { responseError } from '../../store/error/error-process';
import { getError, getUser } from '../../store/selectors';
import { Gender, TrainingLevel, TrainingType } from '../../const';
import { QuestionnaireData } from '../../types/questionnaire-data';
import { toUpperCaseFirst } from '../../utils/util';
import Select from '../select/select';
import { locations } from '../../types/arrays';
import { userInfoEditAction } from '../../store/user/user-api-actions';

export default function UserInfoEdit(): JSX.Element {
  const avatarRef = useRef<HTMLImageElement>(null);
  const errors = useAppSelector(getError);
  const user = useAppSelector(getUser);
  const [request, setRequest] = useState<QuestionnaireData>({
    name: user.name,
    description: user.description ?? '',
    gender: user.gender,
    location: user.location,
    trainingLevel: user.trainingLevel,
    readyForIndividualTraining: user.readyForIndividualTraining,
    readyForTraining: user.readyForTraining,
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

  const handleSubmit = () => {
    dispatch(userInfoEditAction({ ...request, trainingTypes: trainingTypes.join(',') }));
  };

  const handleAvatarChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && avatarRef.current) {
      const file = evt.target.files[0];
      setRequest({ ...request, avatar: file });
      avatarRef.current.src = URL.createObjectURL(file);
    }
  };

  const handleAvatarUpdateClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
    if (avatarRef.current) {
      setRequest({ ...request, avatar: undefined });
      avatarRef.current.src = user.avatar ? `${STATIC_PATH}${user.avatar}` : '';
    }
  };

  const handleAvatarDeleteClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
    if (avatarRef.current) {
      setRequest({ ...request, avatar: '' });
      avatarRef.current.src = '';
    }
  };

  useEffect(() => {
    if (!errors.error) {
      setIsEdit(false);
    }
  }, [dispatch, errors]);

  return (
    <section className="user-info-edit">
      <div className="user-info-edit__header">
        <div className="input-load-avatar">
          <label>
            <input
              className="visually-hidden"
              type="file"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={handleAvatarChange}
              disabled={!isEdit}
            />
            <span className="input-load-avatar__avatar">
              <img
                ref={avatarRef}
                src={user.avatar ? `${STATIC_PATH}${user.avatar}` : ''}
                width="98" height="98" alt="user"
              />
            </span>
          </label>
        </div>
        {
          isEdit ?
            <div className="user-info-edit__controls">
              <button onClick={handleAvatarUpdateClick} className="user-info-edit__control-btn" aria-label="обновить">
                <svg width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-change"></use>
                </svg>
              </button>
              <button onClick={handleAvatarDeleteClick} className="user-info-edit__control-btn" aria-label="удалить">
                <svg width="14" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-trash"></use>
                </svg>
              </button>
            </div> :
            null
        }
      </div>
      <form className="user-info-edit__form" action="#" method="post" onSubmit={handleSubmit}>
        {
          isEdit ?
            <button onClick={handleSubmit} className="btn-flat btn-flat--underlined user-info-edit__save-button" type="button" aria-label="Сохранить">
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
          {errors.name ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.name}</span> : ''}
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
          {errors.description ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.description}</span> : ''}
        </div>
        <div className="user-info-edit__section user-info-edit__section--status">
          <h2 className="user-info-edit__title user-info-edit__title--status">Статус</h2>
          <div className="custom-toggle custom-toggle--switch user-info-edit__toggle">
            {
              user.role === Role.Coach ?
                (
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
                    <span className="custom-toggle__label">Готов к тренировать.</span>
                  </label>
                ) : (
                  <label>
                    <input
                      onChange={handleCheckedChange}
                      type="checkbox"
                      name="readyForTraining"
                      checked={request.readyForTraining}
                      disabled={!isEdit}
                    />
                    <span className="custom-toggle__icon">
                      <svg width="9" height="6" aria-hidden="true">
                        <use xlinkHref="#arrow-check"></use>
                      </svg>
                    </span>
                    <span className="custom-toggle__label">Готов к тренировкам.</span>
                  </label>
                )
            }
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
          </div>
          {errors.trainingTypes ? <span className="custom-input__error" style={{ opacity: 1 }}>{errors.trainingTypes}</span> : ''}
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
