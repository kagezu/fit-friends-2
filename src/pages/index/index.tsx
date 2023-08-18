import Header from '../../components/header/header';
import SpecialForYou from '../../components/special-for-you/special-for-you';
import SpecialOffers from '../../components/special-offers/special-offers';
import LookForCompany from '../../components/look-for-company/look-for-company';
import Trainings from '../../components/trainings/trainings';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/selectors';
import { useEffect } from 'react';

export default function Index(): JSX.Element {
  const user = useAppSelector(getUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.trainingLevel || !user.trainingTypes) {
      navigate(AppRoute.QuestionnaireUser);
    }
  }, [navigate, user]);

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
