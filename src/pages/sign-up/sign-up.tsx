import { FormEvent, useState, ChangeEvent, useRef, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerAction } from '../../store/user/user-api-actions';
import { getError } from '../../store/selectors';
import { RegistrationData } from '../../types/registration-data';
import { responseError } from '../../store/error/error-process';
import { locations } from '../../types/arrays';
import BackgroundLogo from '../../components/background-logo/background-logo';

export default function SignUp(): JSX.Element {
  const [request, setRequest] = useState<RegistrationData>({
    gender: 'женский',
    role: 'тренер'
  });
  const [isLocationList, setIsLocationList] = useState(false);
  const submitRef = useRef<HTMLButtonElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const errors = useAppSelector(getError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAvatarChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && avatarRef.current) {
      const file = evt.target.files[0];
      setRequest({ ...request, avatar: file });
      avatarRef.current.style.background =
        `url(${URL.createObjectURL(file)}) center/cover`;
    }
  };

  const handleLocationClick = (evt: SyntheticEvent<HTMLOptionElement>) => {
    const location = (evt.target as HTMLOptionElement).value;
    setRequest({ ...request, location });
    setIsLocationList(false);
  };

  const handleUserAgreementChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (submitRef.current) {
      submitRef.current.disabled = !evt.target.checked;
    }
  };

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    setRequest({ ...request, [name]: evt.target.value });
    if (errors[name]) {
      dispatch(responseError({ ...errors, [name]: '' }));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (request && submitRef.current) {
      dispatch(registerAction({ request, navigate }));
    }
  };

  return (
    <main>
      <BackgroundLogo />
      <div className="popup-form popup-form--sign-up">
        <div className="popup-form__wrapper">
          <div className="popup-form__content">
            <div className="popup-form__title-wrapper">
              <h1 className="popup-form__title">Регистрация</h1>
            </div>
            <div className="popup-form__form">
              <form method="post" onSubmit={handleSubmit}>
                <div className="sign-up">
                  <div className="sign-up__load-photo">
                    <div className="input-load-avatar">
                      <label>
                        <input onChange={handleAvatarChange} className="visually-hidden" type="file" accept="image/png, image/jpeg" />
                        <span ref={avatarRef} className="input-load-avatar__btn" >
                          <svg width="20" height="20" aria-hidden="true">
                            <use xlinkHref="#icon-import"></use>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <div className="sign-up__description">
                      <h2 className="sign-up__legend">Загрузите фото профиля</h2><span className="sign-up__text">JPG, PNG, оптимальный размер 100&times;100&nbsp;px</span>
                    </div>
                  </div>
                  <div className="sign-up__data">
                    <div className={errors.name ? 'custom-input  custom-input--error' : 'custom-input'}>
                      <label><span className="custom-input__label">Имя</span>
                        <span className="custom-input__wrapper">
                          <input onChange={handleFormDataChange} type="text" name="name" />
                        </span>
                        {errors.name ? <span className="custom-input__error">{errors.name}</span> : ''}
                      </label>
                    </div>
                    <div className={errors.email ? 'custom-input  custom-input--error' : 'custom-input'}>
                      <label><span className="custom-input__label">E-mail</span>
                        <span className="custom-input__wrapper">
                          <input onChange={handleFormDataChange} type="email" name="email" />
                        </span>
                        {errors.email ? <span className="custom-input__error">{errors.email}</span> : ''}
                      </label>
                    </div>
                    <div className={errors.birthday ? 'custom-input  custom-input--error' : 'custom-input'}>
                      <label><span className="custom-input__label">Дата рождения</span>
                        <span className="custom-input__wrapper">
                          <input onChange={handleFormDataChange} type="date" name="birthday" max="2099-12-31" />
                        </span>
                        {errors.birthday ? <span className="custom-input__error">{errors.birthday}</span> : ''}
                      </label>
                    </div>
                    <div className={
                      `custom-select
                      ${errors.location ? ' custom-input--error' : ''}
                      ${request?.location ? 'not-empty' : ' custom-select--not-selected'}
                      ${isLocationList ? 'is-open' : ''}
                      `
                    }
                    >
                      <span className="custom-select__label">Ваша локация</span>
                      <button
                        className="custom-select__button"
                        type="button"
                        aria-label="Выберите одну из опций"
                        onClick={() => setIsLocationList(!isLocationList)}
                      >
                        <span className="custom-select__text">{request?.location}</span>
                        <span className="custom-select__icon">
                          <svg width="15" height="6" aria-hidden="true">
                            <use xlinkHref="#arrow-down"></use>
                          </svg>
                        </span>
                      </button>
                      <ul className="custom-select__list" role="listbox">
                        {
                          locations.map((key) => (
                            <option
                              className='custom-select__item capitalize'
                              key={key}
                              value={key}
                              role='listitem'
                              onClick={handleLocationClick}
                            >{key}
                            </option>
                          ))
                        }
                      </ul>
                      {errors.location ? <span className="custom-input__error">{errors.location}</span> : ''}
                    </div>
                    <div className={errors.password ? 'custom-input  custom-input--error' : 'custom-input'}>
                      <label><span className="custom-input__label">Пароль</span>
                        <span className="custom-input__wrapper">
                          <input onChange={handleFormDataChange} type="password" name="password" autoComplete="off" />
                        </span>
                        {errors.password ? <span className="custom-input__error">{errors.password}</span> : ''}
                      </label>
                    </div>
                    <div className="sign-up__radio"><span className="sign-up__label">Пол</span>
                      <div className="custom-toggle-radio custom-toggle-radio--big">
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleFormDataChange} type="radio" name="gender" value="мужской" />
                            <span className="custom-toggle-radio__icon" >
                            </span>
                            <span className="custom-toggle-radio__label">Мужской</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleFormDataChange} type="radio" name="gender" value="женский" defaultChecked />
                            <span className="custom-toggle-radio__icon"></span><span className="custom-toggle-radio__label">Женский</span>
                          </label>
                        </div>
                        <div className="custom-toggle-radio__block">
                          <label>
                            <input onChange={handleFormDataChange} type="radio" name="gender" value="неважно" />
                            <span className="custom-toggle-radio__icon">
                            </span>
                            <span className="custom-toggle-radio__label">Неважно</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sign-up__role">
                    <h2 className="sign-up__legend">Выберите роль</h2>
                    <div className="role-selector sign-up__role-selector">
                      <div className="role-btn">
                        <label>
                          <input onChange={handleFormDataChange} className="visually-hidden" type="radio" name="role" value="тренер" defaultChecked />
                          <span className="role-btn__icon">
                            <svg width="12" height="13" aria-hidden="true">
                              <use xlinkHref="#icon-cup"></use>
                            </svg>
                          </span><span className="role-btn__btn">Я хочу тренировать</span>
                        </label>
                      </div>
                      <div className="role-btn">
                        <label>
                          <input onChange={handleFormDataChange} className="visually-hidden" type="radio" name="role" value="пользователь" />
                          <span className="role-btn__icon">
                            <svg width="12" height="13" aria-hidden="true">
                              <use xlinkHref="#icon-weight"></use>
                            </svg>
                          </span>
                          <span className="role-btn__btn">Я хочу тренироваться</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="sign-up__checkbox">
                    <label>
                      <input onChange={handleUserAgreementChange} type="checkbox" value="user-agreement" name="user-agreement" />
                      <span className="sign-up__checkbox-icon">
                        <svg width="9" height="6" aria-hidden="true">
                          <use xlinkHref="#arrow-check"></use>
                        </svg>
                      </span>
                      <span className="sign-up__checkbox-label">Я соглашаюсь с <span>политикой конфиденциальности</span> компании</span>
                    </label>
                  </div>
                  <button ref={submitRef} className="btn sign-up__button" type="submit" disabled>Продолжить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
