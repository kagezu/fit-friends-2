import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import UsersCatalog from './users-catalog';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/users-filter/users-filter', () => generateFakeComponent());
jest.mock('../../components/user-card/user-card', () => generateFakeComponent());

describe('Component: UsersCatalog', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <UsersCatalog />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Каталог пользователей/i)).toBeInTheDocument();
  });
});
