import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import Header from './header';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../notification-list/notification-list', () => generateFakeComponent());

describe('Component: Header', () => {
  it('Должен отобразить компонент и список уведомлений', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Поиск/i)).toBeInTheDocument();
    expect(screen.getByText(/Fake component./i)).toBeInTheDocument();
  });
});
