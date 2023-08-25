import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import PersonalAccountCoach from './personal-account-coach';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/user-info-edit/user-info-edit', () => generateFakeComponent());
jest.mock('../../components/coach-navigation/coach-navigation', () => generateFakeComponent());
jest.mock('../../components/certificate-list/certificate-list', () => generateFakeComponent());

describe('Component: PersonalAccountCoach', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <PersonalAccountCoach />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Личный кабинет/i)).toBeInTheDocument();
  });
});
