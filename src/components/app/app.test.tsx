import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { AppRoute, NameSpace, Role } from '../../const';
import { mockStore } from '../../utils/mock-api';
import { redirectTo } from '../../utils/redirect-to';

const generateFakeComponent = (title: string) => ({
  __esModule: true,
  default: () => (<FakeComponent title={title} />)
});
jest.mock('../../pages/intro/intro', () => generateFakeComponent('Intro'));
jest.mock('../../pages/sign-in/sign-in', () => generateFakeComponent('SignIn'));
jest.mock('../../pages/sign-up/sign-up', () => generateFakeComponent('SignUp'));
jest.mock('../../pages/index', () => generateFakeComponent('Index'));
jest.mock('../../pages/error-404/error-404', () => generateFakeComponent('Error404'));
jest.mock('../../pages/personal-account-coach/personal-account-coach', () => generateFakeComponent('PersonalAccountCoach'));
jest.mock('../../pages/questionnaire-user/questionnaire-user', () => generateFakeComponent('QuestionnaireUser'));
jest.mock('../../pages/questionnaire-coach/questionnaire-coach', () => generateFakeComponent('QuestionnaireCoach'));
jest.mock('../../pages/personal-account-user/personal-account-user', () => generateFakeComponent('PersonalAccountUser'));
jest.mock('../../pages/friends-list-user/friends-list-user', () => generateFakeComponent('FriendsListUser'));
jest.mock('../../pages/friends-list-coach/friends-list-coach', () => generateFakeComponent('FriendsListCoach'));
jest.mock('../../pages/training-catalog/training-catalog', () => generateFakeComponent('TrainingCatalog'));
jest.mock('../../pages/training-card-user/training-card-user', () => generateFakeComponent('TrainingCardUser'));
jest.mock('../../pages/training-card-coach/training-card-coach', () => generateFakeComponent('TrainingCardCoach'));
jest.mock('../../pages/create-training/create-training', () => generateFakeComponent('CreateTraining'));
jest.mock('../../pages/my-trainings/my-trainings', () => generateFakeComponent('MyTrainings'));
jest.mock('../../pages/users-catalog/users-catalog', () => generateFakeComponent('UsersCatalog'));
jest.mock('../../pages/error-401/error-401', () => generateFakeComponent('Error401'));
jest.mock('../../pages/user-card-detail/user-card-detail', () => generateFakeComponent('UserCardDetail'));
jest.mock('../../pages/my-purchases/my-purchases', () => generateFakeComponent('MyPurchases'));
jest.mock('../../pages/my-orders/my-orders', () => generateFakeComponent('MyOrders'));

const renderApp = (path: string) => {
  redirectTo(path);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

let store = mockStore({ [NameSpace.User]: { role: Role.Unknown } });

describe('Component: App', () => {
  it('Должен отобразить соответствующий компонент', () => {

    /* (роль: unknown) */
    renderApp(AppRoute.Intro);
    expect(screen.getByText(/Intro/i)).toBeInTheDocument();
    renderApp(AppRoute.SignUp);
    expect(screen.getByText(/SignUp/i)).toBeInTheDocument();
    renderApp(AppRoute.Error401);
    expect(screen.getByText(/Error401/i)).toBeInTheDocument();

    /* (роль: user) */
    store = mockStore({ [NameSpace.User]: { role: Role.User } });
    renderApp(AppRoute.Index);
    expect(screen.getByText(/Index/i)).toBeInTheDocument();
    renderApp(AppRoute.PersonalAccountUser);
    expect(screen.getByText(/PersonalAccountUser/i)).toBeInTheDocument();
    renderApp(AppRoute.FriendsListUser);
    expect(screen.getByText(/FriendsListUser/i)).toBeInTheDocument();
    renderApp(AppRoute.QuestionnaireUser);
    expect(screen.getByText(/QuestionnaireUser/i)).toBeInTheDocument();
    renderApp(AppRoute.TrainingCatalog);
    expect(screen.getByText(/TrainingCatalog/i)).toBeInTheDocument();
    renderApp(`${AppRoute.TrainingCardUser}/:id`);
    expect(screen.getByText(/TrainingCardUser/i)).toBeInTheDocument();
    renderApp(AppRoute.UsersCatalog);
    expect(screen.getByText(/UsersCatalog/i)).toBeInTheDocument();
    renderApp(AppRoute.MyPurchases);
    expect(screen.getByText(/MyPurchases/i)).toBeInTheDocument();

    /* (роль: coach) */
    store = mockStore({ [NameSpace.User]: { role: Role.Coach } });
    renderApp(AppRoute.PersonalAccountCoach);
    expect(screen.getByText(/PersonalAccountCoach/i)).toBeInTheDocument();
    renderApp(AppRoute.FriendsListCoach);
    expect(screen.getByText(/FriendsListCoach/i)).toBeInTheDocument();
    renderApp(AppRoute.QuestionnaireCoach);
    expect(screen.getByText(/QuestionnaireCoach/i)).toBeInTheDocument();
    renderApp(`${AppRoute.TrainingCardCoach}/:id`);
    expect(screen.getByText(/TrainingCardCoach/i)).toBeInTheDocument();
    renderApp(AppRoute.CreateTraining);
    expect(screen.getByText(/CreateTraining/i)).toBeInTheDocument();
    renderApp(AppRoute.MyOrders);
    expect(screen.getByText(/MyOrders/i)).toBeInTheDocument();
    renderApp(AppRoute.MyTrainings);
    expect(screen.getByText(/MyTrainings/i)).toBeInTheDocument();

    /* (кроме unknown) */
    renderApp(`${AppRoute.UserCardDetail}/:id`);
    expect(screen.getByText(/UserCardDetail/i)).toBeInTheDocument();
    renderApp('/qwerty123456');
    expect(screen.getByText(/Error404/i)).toBeInTheDocument();
  });
});
