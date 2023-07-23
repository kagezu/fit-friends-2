import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Intro from '../../pages/intro/intro';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';


export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Intro} element={<Intro />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Registration} element={<SignUp />} />

        {/*
        <Route path="/" element={<Layout />}>
          <Route
            path={AppRoute.AddItem}
            element={
              <PrivateRoute roles={[Role.Admin]}>
                <AddItem />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.EditItem}
            element={
              <PrivateRoute roles={[Role.Admin]}>
                <EditItem />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Product}
            element={
              <PrivateRoute roles={[Role.Admin]}>
                <Product />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.ProductList}
            element={
              <PrivateRoute roles={[Role.Admin]}>
                <ProductList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Error404}
            element={
              <PrivateRoute roles={[Role.Admin, Role.User]}>
                <Error404 />
              </PrivateRoute>
            }
          />
        </Route>
        */}
      </Routes>
    </BrowserRouter >
  );
}
