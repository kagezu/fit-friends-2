import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/selectors';

const DAYS_PER_WEEK = 7;

export default function Schedule(): JSX.Element {
  const user = useAppSelector(getUser);
  return (
    <div className="personal-account-user__schedule">
      <form action="#" method="get">
        <div className="personal-account-user__form">
          <div className="personal-account-user__input">
            <label><span className="personal-account-user__label">План на день, ккал</span>
              <input type="text" name="schedule-for-the-day" defaultValue={user.caloriesPerDay?.toLocaleString()} />
            </label>
          </div>
          <div className="personal-account-user__input">
            <label><span className="personal-account-user__label">План на неделю, ккал</span>
              <input type="text" name="schedule-for-the-week" defaultValue={((user.caloriesPerDay ?? 0) * DAYS_PER_WEEK).toLocaleString()} />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
