import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import MyTrainings from './my-trainings';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/mu-training-filter/my-training-filter', () => generateFakeComponent());
jest.mock('../../components/training-card/training-card', () => generateFakeComponent());

describe('Component: MyTrainings', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <MyTrainings />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Каталог тренировок/i)).toBeInTheDocument();
  });
});
