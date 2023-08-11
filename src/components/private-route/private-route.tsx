import { Navigate } from 'react-router-dom';
import { AppRoute, Role } from '../../const';

type PrivateRouteProps = {
  role: Role;
  roles: Role[];
  children: JSX.Element;
}

export default function PrivateRoute({ role, roles, children }: PrivateRouteProps): JSX.Element {
  return (
    roles.some((allowed) => allowed === role)
      ? children
      : <Navigate to={AppRoute.Error401} />
  );
}
