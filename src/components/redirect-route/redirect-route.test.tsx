import { render, screen } from '@testing-library/react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import RedirectRoute, { Redirect } from './redirect-route';
import { redirectTo } from '../../utils/redirect-to';

const redirectUserIndex: Redirect = {
  trigger: Role.User,
  redirect: AppRoute.Index
};

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    redirectTo(AppRoute.SignUp);
  });

  it('Должен отображать компонент при переадресации', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.SignUp}
            element={
              <RedirectRoute target={Role.User} routes={[
                redirectUserIndex
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
    );

    expect(screen.getByText(/Index Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/SignUp Route/i)).not.toBeInTheDocument();
  });

  it('Должен отображать компонент без переадресации', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.SignUp}
            element={
              <RedirectRoute target={Role.Unknown} routes={[
                redirectUserIndex
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
    );

    expect(screen.getByText(/SignUp Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Index Route/i)).not.toBeInTheDocument();
  });

});
