import { Navigate } from 'react-router-dom';
import { AppRoute, Role } from '../../const';
import { useAppSelector } from '../../hooks';
import { getRole } from '../../store/selectors';

type PrivateRouteProps = {
  roles: Role[];
  children: JSX.Element;
}

export default function PrivateRoute({ roles, children }: PrivateRouteProps): JSX.Element {
  const role = useAppSelector(getRole);
  return (
    roles.some((allowed) => allowed === role)
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
