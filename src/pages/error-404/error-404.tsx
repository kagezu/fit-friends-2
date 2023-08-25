import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import BackgroundLogo from '../../components/background-logo/background-logo';

export default function Error404(): JSX.Element {
  return (
    <main>
      <BackgroundLogo />
      <div className="popup-form">
        <div className="popup-form__wrapper">
          <div className="popup-form__content">
            <div className="popup-form__title-wrapper">
              <h1 className="popup-form__title">404 Страница не найдена</h1>
            </div>
            <div className="popup-form__form">
              <p className="custom-input__label">Возможно, страница была удалена или<br />её вовсе не существовало.</p>
              <Link className="btn create-training__button" type="submit" to={AppRoute.Intro}>Продолжить</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
