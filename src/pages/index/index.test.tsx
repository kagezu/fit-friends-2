import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import Index from './index';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/special-for-you/special-for-you', () => generateFakeComponent());
jest.mock('../../components/special-offers/special-offers', () => generateFakeComponent());
jest.mock('../../components/look-for-company/look-for-company', () => generateFakeComponent());
jest.mock('../../components/trainings/trainings', () => generateFakeComponent());

describe('Component: Index', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Время находить тренировки, спортзалы и друзей спортсменов/i)).toBeInTheDocument();
  });
});
