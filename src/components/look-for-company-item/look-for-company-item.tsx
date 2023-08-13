import { Link } from 'react-router-dom';
import { User } from '../../types/user';
import { AppRoute, STATIC_PATH } from '../../const';

export default function LookForCompanyItem({ user }: { user: User }): JSX.Element {
  return (
    <li className="look-for-company__item">
      <div className="thumbnail-user thumbnail-user--role-user thumbnail-user--dark">
        <div className="thumbnail-user__image">
          <picture>
            <img src={user.avatar ? `${STATIC_PATH}${user.avatar}` : ''} width="82" height="82" alt="" />
          </picture>
        </div>
        <div className="thumbnail-user__top-status thumbnail-user__top-status--role-user">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#icon-crown"></use>
          </svg>
        </div>
        <div className="thumbnail-user__header">
          <h3 className="thumbnail-user__name">{user.name}</h3>
          <div className="thumbnail-user__location">
            <svg width="14" height="16" aria-hidden="true">
              <use xlinkHref="#icon-location"></use>
            </svg>
            <address className="thumbnail-user__location-address">{user.location}</address>
          </div>
        </div>
        <ul className="thumbnail-user__hashtags-list">
          {
            user.trainingTypes?.map((hashtag) => (
              <li key={`${hashtag}-${user.id}`} className="thumbnail-user__hashtags-item">
                <div className="hashtag thumbnail-user__hashtag">
                  <span>#{hashtag}</span>
                </div>
              </li>
            ))
          }
        </ul>
        <Link
          className="btn btn--outlined btn--dark-bg btn--medium thumbnail-user__button"
          to={`${AppRoute.UserCardDetail}/${user.id}`}
        >Подробнее
        </Link>
      </div>
    </li>
  );
}
