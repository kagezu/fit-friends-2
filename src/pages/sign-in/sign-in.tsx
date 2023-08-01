import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/user/user-api-actions';
import { getError } from '../../store/selectors';
import BackgroundLogo from '../../components/background-logo/background-logo';

export default function SignIn(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errors = useAppSelector(getError);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      dispatch(loginAction({ email, password, navigate }));
    }
  };


  return (
    <main>
      <BackgroundLogo />
      <div className="popup-form popup-form--sign-in">
        <div className="popup-form__wrapper">
          <div className="popup-form__content">
            <div className="popup-form__title-wrapper">
              <h1 className="popup-form__title">Вход</h1>
            </div>
            <div className="popup-form__form">
              <form onSubmit={handleSubmit}>
                <div className="sign-in">
                  <div className={errors.email || errors.message ? 'custom-input sign-in__input custom-input--error' : 'custom-input sign-in__input'}>
                    <label><span className="custom-input__label">E-mail</span>
                      <span className="custom-input__wrapper">
                        <input
                          ref={emailRef}
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="on"
                          required
                        />
                      </span>
                      {errors.email ? <span className="custom-input__error">{errors.email}</span> : ''}
                      {errors.message ? <span className="custom-input__error">{errors.message}</span> : ''}
                    </label>
                  </div>
                  <div className={errors.password ? 'custom-input sign-in__input custom-input--error' : 'custom-input sign-in__input'}>
                    <label><span className="custom-input__label">Пароль</span>
                      <span className="custom-input__wrapper">
                        <input
                          ref={passwordRef}
                          type="password"
                          id="passwordLogin"
                          name="password"
                          autoComplete="off"
                          required
                        />
                      </span>
                      {errors.password ? <span className="custom-input__error">{errors.password}</span> : ''}
                    </label>
                  </div>
                  <button className="btn sign-in__button" type="submit">Продолжить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
