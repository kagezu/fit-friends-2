import Header from '../../components/header/header';
import Schedule from '../../components/schedule/schedule';
import UserInfoEdit from '../../components/user-info-edit/user-info-edit';
import UserNavigation from '../../components/user-navigation/user-navigation';

export default function PersonalAccountUser(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Личный кабинет</h1>
              <UserInfoEdit />
              <div className="inner-page__content">
                <div className="personal-account-user">
                  <Schedule />
                  <UserNavigation />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
