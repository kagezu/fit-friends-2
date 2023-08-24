import { render, screen } from '@testing-library/react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import { mockStore } from '../../utils/mock-api';
import { Provider } from 'react-redux';
import RedirectRoute, { Redirect } from './redirect-route';

const redirectUserIndex: Redirect = {
  trigger: Role.User,
  redirect: AppRoute.Index
};

const redirectPersonalAccountCoach: Redirect = {
  trigger: Role.Coach,
  redirect: AppRoute.PersonalAccountCoach
};

describe('Component: PrivateRouter', () => {
  const store = mockStore();

  it('Должен отображать компонент при переадресации', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={'/'}
              element={<Navigate to={AppRoute.SignUp} />}
            />
            <Route
              path={AppRoute.SignUp}
              element={
                <RedirectRoute target={Role.User} routes={[
                  redirectUserIndex,
                  redirectPersonalAccountCoach
                ]}
                >
                  <h1>SignUp Route</h1>
                </RedirectRoute>
              }
            />
            <Route
              path={AppRoute.Index}
              element={<h1>Index Route</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Index Route/i)).toBeInTheDocument();
  });

  it('Должен отображать компонент без переадресации', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Index}
              element={<Navigate to={AppRoute.SignUp} />}
            />
            <Route
              path={AppRoute.SignUp}
              element={
                <RedirectRoute target={Role.Unknown} routes={[
                  redirectUserIndex,
                  redirectPersonalAccountCoach
                ]}
                >
                  <h1>SignUp Route</h1>
                </RedirectRoute>
              }
            />
            <Route
              path={AppRoute.Index}
              element={<h1>Index Route</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/SignUp Route/i)).toBeInTheDocument();
  });

});
