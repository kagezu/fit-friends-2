import Header from '../../components/header/header';
import UserInfoEdit from '../../components/user-info-edit/user-info-edit';
import CoachNavigation from '../../components/coach-navigation/coach-navigation';
import Certificate from '../../components/certificate/certificate';

export default function PersonalAccountCoach(): JSX.Element {
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
                <div className="personal-account-coach">
                  <CoachNavigation />
                  <Certificate />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
