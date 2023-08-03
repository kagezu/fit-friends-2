import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, Role } from '../../types/enums';
import Intro from '../../pages/intro/intro';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';
import { useAppSelector } from '../../hooks';
import { getRole } from '../../store/selectors';
import RedirectRoute, { Redirect } from '../redirect-route/redirect-route';
import Index from '../../pages/index';
import PrivateRoute from '../private-route/private-route';
import Error404 from '../../pages/error-404/error-404';
import PersonalAccountCoach from '../../pages/personal-account-coach/personal-account-coach';
import QuestionnaireUser from '../../pages/questionnaire-user/questionnaire-user';
import QuestionnaireCoach from '../../pages/questionnaire-coach/questionnaire-coach';
import PersonalAccountUser from '../../pages/personal-account-user/personal-account-user';
import FriendsListUser from '../../pages/friends-list-user/friends-list-user';
import FriendsListCoach from '../../pages/friends-list-coach/friends-list-coach';

const redirectUser: Redirect = {
  trigger: Role.User,
  redirect: AppRoute.Index
};

const redirectCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.PersonalAccountCoach
};

const redirectFriendsCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.FriendsListCoach
};

const redirectUnknown: Redirect = {
  trigger: Role.Unknown,
  redirect: AppRoute.SignIn
};

export default function App(): JSX.Element {
  const role = useAppSelector(getRole);
  return (
    <BrowserRouter>
      <Routes>
        {/* Разводящая */}
        <Route path={AppRoute.Intro} element={<Intro />} />

        {/* Вход */}
        <Route
          path={AppRoute.SignIn}
          element={
            <RedirectRoute target={role} routes={[redirectUser, redirectCoach]}>
              <SignIn />
            </RedirectRoute>
          }
        />

        {/* Регистрация */}
        <Route
          path={AppRoute.SignUp}
          element={
            <RedirectRoute target={role} routes={[redirectUser, redirectCoach]}>
              <SignUp />
            </RedirectRoute>
          }
        />

        {/*  Главная */}
        <Route
          path={AppRoute.Index}
          element={
            <PrivateRoute role={role} roles={[Role.User]}>
              <Index />
            </PrivateRoute>
          }
        />

        {/* Личный кабинет пользователя */}
        <Route
          path={AppRoute.PersonalAccountUser}
          element={
            <RedirectRoute target={role} routes={[redirectUnknown, redirectCoach]}>
              <PersonalAccountUser />
            </RedirectRoute>
          }
        />

        {/* Личный кабинет тренера */}
        <Route
          path={AppRoute.PersonalAccountCoach}
          element={
            <PrivateRoute role={role} roles={[Role.Coach]}>
              <PersonalAccountCoach />
            </PrivateRoute>
          }
        />

        {/* Список друзей пользователя */}
        <Route
          path={AppRoute.FriendsListUser}
          element={
            <RedirectRoute target={role} routes={[redirectUnknown, redirectFriendsCoach]}>
              <FriendsListUser />
            </RedirectRoute>
          }
        />

        {/* Список друзей тренера */}
        <Route
          path={AppRoute.FriendsListCoach}
          element={
            <PrivateRoute role={role} roles={[Role.Coach]}>
              <FriendsListCoach />
            </PrivateRoute>
          }
        />

        {/* Опросник пользователя */}
        <Route
          path={AppRoute.QuestionnaireUser}
          element={
            <PrivateRoute role={role} roles={[Role.User]}>
              <QuestionnaireUser />
            </PrivateRoute>
          }
        />

        {/* Опросник тренера */}
        <Route
          path={AppRoute.QuestionnaireCoach}
          element={
            <PrivateRoute role={role} roles={[Role.Coach]}>
              <QuestionnaireCoach />
            </PrivateRoute>
          }
        />

        {/* Запрошенная страница не существует */}
        <Route
          path={AppRoute.Error404}
          element={
            <PrivateRoute role={role} roles={[Role.Coach, Role.User]}>
              <Error404 />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter >
  );
}
