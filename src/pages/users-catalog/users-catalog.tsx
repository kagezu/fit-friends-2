import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import UsersFilter from '../../components/users-filter/users-filter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser, getUsers } from '../../store/selectors';
import { UserQuery } from '../../types/user-query';
import UserCard from '../../components/user-card/user-card';
import { getUsersAction } from '../../store/user/user-api-actions';

const MAX_COUNT_CARD_ON_PAGE = 6;

export default function UsersCatalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsers);
  const user = useAppSelector(getUser);
  const [params, setParams] = useState<UserQuery>(Object.assign({
    trainingLevel: user.trainingLevel,
    location: user.location,
  }, user.trainingTypes ? { trainingTypes: user.trainingTypes.join(',') } : {
  }));
  const [page, setPage] = useState<number>(0);

  const handleNextClick = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const handleBeginClick = () => {
    setPage(0);
    window.scrollTo(0, 0);
  };

  const handleFiltersChange = (query: UserQuery) => setParams({ ...params, ...query });

  useEffect(() => {
    dispatch(getUsersAction({
      ...params,
      limit: MAX_COUNT_CARD_ON_PAGE,
      page
    }));
  }, [dispatch, page, params]);

  return (
    <>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Каталог пользователей</h1>
              <UsersFilter onChange={handleFiltersChange} params={params} />
              <div className="inner-page__content">
                <div className="users-catalog">
                  <ul className="users-catalog__list">
                    {
                      users.map((item) => (
                        <UserCard key={`catalog-${item.id}`} user={item} />
                      ))
                    }
                  </ul>
                  <div className="show-more users-catalog__show-more">
                    {
                      users.length === MAX_COUNT_CARD_ON_PAGE ?
                        (<button onClick={handleNextClick} className="btn show-more__button show-more__button--more" type="button">Показать еще</button>) :
                        (<button onClick={handleBeginClick} className="btn show-more__button show-more__button--more" type="button">Вернуться в начало</button>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
