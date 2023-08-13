import Header from '../../components/header/header';
import SpecialForYou from '../../components/special-for-you/special-for-you';
import SpecialOffers from '../../components/special-offers/special-offers';
import LookForCompany from '../../components/look-for-company/look-for-company';
import Trainings from '../../components/trainings/trainings';

export default function Index(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">FitFriends — Время находить тренировки, спортзалы и друзей спортсменов</h1>
        <SpecialForYou />
        <SpecialOffers />
        <section className="popular-trainings">
          <div className="container">
            <Trainings
              params={{ category: 'rating' }}
              title={'Популярные тренировки'}
            />
          </div>
        </section>
        <LookForCompany />
      </main >
    </>
  );
}
