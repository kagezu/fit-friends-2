import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export type Redirect = {
  target: string;
  redirect: AppRoute;
}

type RedirectRouteProps = {
  state: string;
  routes: Redirect[];
  children: JSX.Element;
}

export default function RedirectRoute({ state, children, routes }: RedirectRouteProps): JSX.Element {
  const route = routes.filter(({ target }: Redirect) => state === target)[0];
  return (
    route
      ? <Navigate to={route.redirect} />
      : children
  );
}
