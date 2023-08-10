import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Error404(): JSX.Element {
  return (
    <div className="container">
      <section className="error">
        <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
        <p className="error__text"> Возможно, страница была удалена или<br />её вовсе не существовало.</p>
        <Link className="btn create-training__button" type="submit" to={AppRoute.SignIn}>Продолжить</Link>
      </section>
    </div>
  );
}
