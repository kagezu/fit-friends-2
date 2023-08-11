import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Error401(): JSX.Element {
  return (
    <div className="container">
      <section className="error">
        <h1 className="error__title">401</h1><span className="error__subtitle">Нет доступа.</span>
        <p className="error__text">Вы не выполнили вход или<br />у вас недостаточно прав для просмотра.</p>
        <Link className="btn create-training__button" type="submit" to={AppRoute.Intro}>Продолжить</Link>
      </section>
    </div>
  );
}
