import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import MyOrders from './my-orders';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/my-order-card/my-order-card', () => generateFakeComponent());

describe('Component: MyOrders', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <MyOrders />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Мои заказы/i)).toBeInTheDocument();
  });
});
