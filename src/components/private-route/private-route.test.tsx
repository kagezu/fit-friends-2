import { render, screen } from '@testing-library/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import PrivateRoute from './private-route';
import { redirectTo } from '../../utils/redirect-to';

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    redirectTo(AppRoute.Index);
  });

  it('Должен отображать компонент когда пользователь не авторизован', () => {
    render(
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/Error 401/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('Должен отображать компонент когда пользователь авторизован', () => {
    render(
      <BrowserRouter>
        <Routes>
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
            <Route
              path={AppRoute.Error401}
              element={<h1>Error 401</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Error 401/i)).not.toBeInTheDocument();
  });

});
