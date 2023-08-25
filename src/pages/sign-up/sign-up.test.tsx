import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import SignUp from './sign-up';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/background-logo/background-logo', () => generateFakeComponent());

describe('Component: SignUp', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Регистрация/i)).toBeInTheDocument();
  });
});
