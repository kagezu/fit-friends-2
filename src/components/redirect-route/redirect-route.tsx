import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';

export type Redirect = {
  trigger: string;
  redirect: AppRoute;
}

type RedirectRouteProps = {
  target: string;
  routes: Redirect[];
  children: JSX.Element;
}

export default function RedirectRoute({ target, children, routes }: RedirectRouteProps): JSX.Element {
  const { id } = useParams();
  const route = routes.filter(({ trigger }: Redirect) => target === trigger)[0];

  return (
    route
      ? <Navigate to={id ? `${route.redirect}/${id}` : route.redirect} />
      : children
  );
}
