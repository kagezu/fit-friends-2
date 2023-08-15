import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFriends, getPersonalOrders, getUser } from '../../store/selectors';
import UserFriendCard from '../../components/user-friend-card/user-friend-card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getFriendsAction } from '../../store/friend/friend-api-actions';
import { getPersonalOrdersAction } from '../../store/order/order-api-actions';

const MAX_COUNT_CARD_ON_PAGE = 6;

export default function FriendsListUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const friends = useAppSelector(getFriends);
  const orders = useAppSelector(getPersonalOrders);
  const [page, setPage] = useState<number>(0);
  const viewFriends = friends
    .slice(0, (page + 1) * MAX_COUNT_CARD_ON_PAGE)
    .map(({ friend }) => friend);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleBeginClick = () => {
    setPage(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getFriendsAction());
    dispatch(getPersonalOrdersAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <section className="friends-list">
          <div className="container">
            <div className="friends-list__wrapper">
              <Link className="btn-flat friends-list__back" to={AppRoute.PersonalAccountUser}>
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </Link>
              <div className="friends-list__title-wrapper">
                <h1 className="friends-list__title">Мои друзья</h1>
              </div>
              <ul className="friends-list__list">

                {
                  viewFriends.map((item) => (
                    <UserFriendCard
                      key={`catalog-${item.id}`}
                      user={item}
                      order={orders.find((order) => (order.initiator === item.id || order.user === item.id))}
                      userId={user.id}
                      role={user.role}
                    />
                  ))
                }

              </ul>
              <div className="show-more friends-list__show-more">
                {
                  viewFriends.length === MAX_COUNT_CARD_ON_PAGE ?
                    (<button onClick={handleNextClick} className="btn show-more__button show-more__button--more" type="button">Показать еще</button>) :
                    (<button onClick={handleBeginClick} className="btn show-more__button show-more__button--more" type="button">Вернуться в начало</button>)
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
