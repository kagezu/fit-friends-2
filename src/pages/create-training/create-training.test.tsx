import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import CreateTraining from './create-training';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';

const generateFakeComponent = (title: string) => ({
  __esModule: true,
  default: () => (<FakeComponent title={title} />)
});
jest.mock('../../components/header/header', () => generateFakeComponent('Header component'));

describe('Component: CreateTraining', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <CreateTraining />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Создание тренировки/i)).toBeInTheDocument();
  });
});
