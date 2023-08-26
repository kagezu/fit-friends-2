import { Route, Routes } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import { useAppSelector } from '../../hooks';
import { getRole } from '../../store/selectors';
import RedirectRoute, { Redirect } from '../redirect-route/redirect-route';
import Intro from '../../pages/intro/intro';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';
import Index from '../../pages/index';
import PrivateRoute from '../private-route/private-route';
import Error404 from '../../pages/error-404/error-404';
import PersonalAccountCoach from '../../pages/personal-account-coach/personal-account-coach';
import QuestionnaireUser from '../../pages/questionnaire-user/questionnaire-user';
import QuestionnaireCoach from '../../pages/questionnaire-coach/questionnaire-coach';
import PersonalAccountUser from '../../pages/personal-account-user/personal-account-user';
import FriendsListUser from '../../pages/friends-list-user/friends-list-user';
import FriendsListCoach from '../../pages/friends-list-coach/friends-list-coach';
import TrainingCatalog from '../../pages/training-catalog/training-catalog';
import TrainingCardUser from '../../pages/training-card-user/training-card-user';
import TrainingCardCoach from '../../pages/training-card-coach/training-card-coach';
import CreateTraining from '../../pages/create-training/create-training';
import MyTrainings from '../../pages/my-trainings/my-trainings';
import UsersCatalog from '../../pages/users-catalog/users-catalog';
import Error401 from '../../pages/error-401/error-401';
import UserCardDetail from '../../pages/user-card-detail/user-card-detail';
import MyPurchases from '../../pages/my-purchases/my-purchases';
import MyOrders from '../../pages/my-orders/my-orders';

const redirectUserIndex: Redirect = {
  trigger: Role.User,
  redirect: AppRoute.Index
};

const redirectPersonalAccountCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.PersonalAccountCoach
};

const redirectFriendsListCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.FriendsListCoach
};

const redirectTrainingCardCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.TrainingCardCoach
};

const redirectTrainingCardUser: Redirect = {
  trigger: Role.User,
  redirect: AppRoute.TrainingCardUser
};

const redirectSignIn: Redirect = {
  trigger: Role.Unknown,
  redirect: AppRoute.SignIn
};

export default function App(): JSX.Element {
  const role = useAppSelector(getRole);
  return (
    <Routes>
      {/* Разводящая */}
      <Route path={AppRoute.Intro} element={<Intro />} />

      {/* Вход (роль: unknown) */}
      <Route
        path={AppRoute.SignIn}
        element={
          <RedirectRoute target={role} routes={[
            redirectUserIndex,
            redirectPersonalAccountCoach
          ]}
          >
            <SignIn />
          </RedirectRoute>
        }
      />

      {/* Регистрация (роль: unknown) */}
      <Route
        path={AppRoute.SignUp}
        element={
          <RedirectRoute target={role} routes={[
            redirectUserIndex,
            redirectPersonalAccountCoach
          ]}
          >
            <SignUp />
          </RedirectRoute>
        }
      />

      {/*  Главная (роль: user) */}
      <Route
        path={AppRoute.Index}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn, redirectPersonalAccountCoach
          ]}
          >
            <Index />
          </RedirectRoute>
        }
      />

      {/* Личный кабинет пользователя (роль: user) */}
      <Route
        path={AppRoute.PersonalAccountUser}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn,
            redirectPersonalAccountCoach
          ]}
          >
            <PersonalAccountUser />
          </RedirectRoute>
        }
      />

      {/* Личный кабинет тренера (роль: coach) */}
      <Route
        path={AppRoute.PersonalAccountCoach}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <PersonalAccountCoach />
          </PrivateRoute>
        }
      />

      {/* Список друзей пользователя (роль: user) */}
      <Route
        path={AppRoute.FriendsListUser}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn,
            redirectFriendsListCoach
          ]}
          >
            <FriendsListUser />
          </RedirectRoute>
        }
      />

      {/* Список друзей тренера (роль: coach) */}
      <Route
        path={AppRoute.FriendsListCoach}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <FriendsListCoach />
          </PrivateRoute>
        }
      />

      {/* Опросник пользователя (роль: user) */}
      <Route
        path={AppRoute.QuestionnaireUser}
        element={
          <PrivateRoute role={role} roles={[Role.User]}>
            <QuestionnaireUser />
          </PrivateRoute>
        }
      />

      {/* Опросник тренера (роль: coach) */}
      <Route
        path={AppRoute.QuestionnaireCoach}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <QuestionnaireCoach />
          </PrivateRoute>
        }
      />

      {/* Каталог тренировок (роль: user) */}
      <Route
        path={AppRoute.TrainingCatalog}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn,
            redirectPersonalAccountCoach
          ]}
          >
            <TrainingCatalog />
          </RedirectRoute>
        }
      />

      {/* Карточка тренировки (роль: user) */}
      <Route
        path={`${AppRoute.TrainingCardUser}/:id`}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn,
            redirectTrainingCardCoach
          ]}
          >
            <TrainingCardUser />
          </RedirectRoute>
        }
      />

      {/* Карточка тренировки (роль: coach) */}
      <Route
        path={`${AppRoute.TrainingCardCoach}/:id`}
        element={
          <RedirectRoute target={role} routes={[
            redirectSignIn,
            redirectTrainingCardUser
          ]}
          >
            <TrainingCardCoach />
          </RedirectRoute>
        }
      />

      {/* Создание новой тренировки (роль: coach) */}
      <Route
        path={AppRoute.CreateTraining}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <CreateTraining />
          </PrivateRoute>
        }
      />

      {/* Мои заказы (роль: coach) */}
      <Route
        path={AppRoute.MyOrders}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <MyOrders />
          </PrivateRoute>
        }
      />

      {/* Мои тренировки (роль: coach) */}
      <Route
        path={AppRoute.MyTrainings}
        element={
          <PrivateRoute role={role} roles={[Role.Coach]}>
            <MyTrainings />
          </PrivateRoute>
        }
      />

      {/* Каталог пользователей (роль: user) */}
      <Route
        path={AppRoute.UsersCatalog}
        element={
          <PrivateRoute role={role} roles={[Role.User]}>
            <UsersCatalog />
          </PrivateRoute>
        }
      />

      {/* Карточка пользователя */}
      <Route
        path={`${AppRoute.UserCardDetail}/:id`}
        element={
          <PrivateRoute role={role} roles={[Role.Coach, Role.User]}>
            <UserCardDetail />
          </PrivateRoute>
        }
      />

      {/* Мои покупки (роль: user) */}
      <Route
        path={AppRoute.MyPurchases}
        element={
          <PrivateRoute role={role} roles={[Role.User]}>
            <MyPurchases />
          </PrivateRoute>
        }
      />

      {/* Недостаточно прав */}
      <Route
        path={AppRoute.Error401}
        element={<Error401 />}
      />

      {/* Запрошенная страница не существует (роль: user,coach) */}
      <Route
        path={AppRoute.Error404}
        element={
          <PrivateRoute role={role} roles={[Role.Coach, Role.User]}>
            <Error404 />
          </PrivateRoute>
        }
      />

    </Routes>
  );
}
