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

const redirectRoutes: Redirect[] = [
  {
    trigger: Role.User,
    redirect: AppRoute.Index
  },
  {
    trigger: Role.Coach,
    redirect: AppRoute.PersonalAccountCoach
  },
];

export default function App(): JSX.Element {
  const role = useAppSelector(getRole);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Intro} element={<Intro />} />

        <Route
          path={AppRoute.SignIn}
          element={
            <RedirectRoute target={role} routes={redirectRoutes}>
              <SignIn />
            </RedirectRoute>
          }
        />

        <Route
          path={AppRoute.SignUp}
          element={
            <RedirectRoute target={role} routes={redirectRoutes}>
              <SignUp />
            </RedirectRoute>
          }
        />

        <Route
          path={AppRoute.Index}
          element={
            <PrivateRoute role={role} roles={[Role.User]}>
              <Index />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.PersonalAccountCoach}
          element={
            <PrivateRoute role={role} roles={[Role.Coach]}>
              <PersonalAccountCoach />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.QuestionnaireUser}
          element={
            <PrivateRoute role={role} roles={[Role.User]}>
              <QuestionnaireUser />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.QuestionnaireCoach}
          element={
            <PrivateRoute role={role} roles={[Role.Coach]}>
              <QuestionnaireCoach />
            </PrivateRoute>
          }
        />

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
