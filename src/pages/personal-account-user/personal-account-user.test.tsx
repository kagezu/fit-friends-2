import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import PersonalAccountUser from './personal-account-user';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/user-info-edit/user-info-edit', () => generateFakeComponent());
jest.mock('../../components/user-navigation/user-navigation', () => generateFakeComponent());
jest.mock('../../components/schedule/schedule', () => generateFakeComponent());

describe('Component: PersonalAccountUser', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <PersonalAccountUser />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Личный кабинет/i)).toBeInTheDocument();
  });
});
