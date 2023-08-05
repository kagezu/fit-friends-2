import { Link, useLocation } from 'react-router-dom';
import NotificationList from '../notification-list/notification-list';
import { useAppSelector } from '../../hooks';
import { getNotify } from '../../store/selectors';
import { AppRoute } from '../../const';

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const notifications = useAppSelector(getNotify);
  const notificationClass = `main-nav__item main-nav__item--notifications
  ${notifications.length ? ' is-notifications' : ''}`;
  const mainLinkClass = pathname === AppRoute.Index || pathname === AppRoute.PersonalAccountCoach ?
    'main-nav__link is-active' : 'main-nav__link';
  const accountLinkClass = pathname === AppRoute.PersonalAccountUser ?
    'main-nav__link is-active' : 'main-nav__link';
  const friendsLinkClass = pathname === AppRoute.FriendsListUser || pathname === AppRoute.FriendsListCoach ?
    'main-nav__link is-active' : 'main-nav__link';

  return (
    <header className="header">
      <div className="container">
        <span className="header__logo">
          <svg width="187" height="70" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={mainLinkClass} to={AppRoute.Index} aria-label="На главную">
                <svg width="18" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-home"></use>
                </svg>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={accountLinkClass} to={AppRoute.PersonalAccountUser} aria-label="Личный кабинет">
                <svg width="16" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-user"></use>
                </svg>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={friendsLinkClass} to={AppRoute.FriendsListUser} aria-label="Друзья">
                <svg width="22" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-friends"></use>
                </svg>
              </Link>
            </li>
            <li className={notificationClass}>
              <Link className="main-nav__link" to="#" aria-label="Уведомления">
                <svg width="14" height="18" aria-hidden="true">
                  <use xlinkHref="#icon-notification"></use>
                </svg>
              </Link>
              <NotificationList notifications={notifications} />
            </li>
          </ul>
        </nav>
        <div className="search">
          <form action="#" method="get">
            <label><span className="search__label">Поиск</span>
              <input type="search" name="search" />
              <svg className="search__icon" width="20" height="20" aria-hidden="true">
                <use xlinkHref="#icon-search"></use>
              </svg>
            </label>
          </form>
        </div>
      </div>
    </header>
  );
}
