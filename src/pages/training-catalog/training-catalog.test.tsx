import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import TrainingCatalog from './training-catalog';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/training-card/training-card', () => generateFakeComponent());
jest.mock('../../components/training-filter/training-filter', () => generateFakeComponent());

describe('Component: TrainingCatalog', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <TrainingCatalog />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Каталог тренировок/i)).toBeInTheDocument();
  });
});
