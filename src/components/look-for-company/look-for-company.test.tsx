import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import LookForCompany from './look-for-company';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../look-for-company-item/look-for-company-item', () => generateFakeComponent());

describe('Component: LookForCompany', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <LookForCompany />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Смотреть все/i)).toBeInTheDocument();
    expect(screen.getByText(/Fake component./i)).toBeInTheDocument();
  });
});
