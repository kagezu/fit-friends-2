import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import SignIn from './sign-in';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/background-logo/background-logo', () => generateFakeComponent());

describe('Component: SignIn', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Вход/i)).toBeInTheDocument();
  });
});
