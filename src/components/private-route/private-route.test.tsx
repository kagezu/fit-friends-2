import { render, screen } from '@testing-library/react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import { mockStore } from '../../utils/mock-api';
import PrivateRoute from './private-route';
import { Provider } from 'react-redux';

describe('Component: PrivateRouter', () => {
  const store = mockStore();

  it('Должен отображать компонент когда пользователь не авторизован', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={'/'}
              element={<Navigate to={AppRoute.Index} />}
            />
            <Route>
              <Route
                path={AppRoute.Index}
                element={
                  <PrivateRoute
                    role={Role.Unknown}
                    roles={[Role.User, Role.Coach]}
                  >
                    <h1>Private Route</h1>
                  </PrivateRoute>
                }
              />
              <Route
                path={AppRoute.Error401}
                element={<h1>Error 401</h1>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider >
    );

    expect(screen.getByText(/Error 401/i)).toBeInTheDocument();
  });

  it('Должен отображать компонент когда пользователь авторизован', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Error401}
              element={<Navigate to={AppRoute.Index} />}
            />
            <Route>
              <Route
                path={AppRoute.Index}
                element={
                  <PrivateRoute
                    role={Role.User}
                    roles={[Role.User, Role.Coach]}
                  >
                    <h1>Private Route</h1>
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider >
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
  });

});
