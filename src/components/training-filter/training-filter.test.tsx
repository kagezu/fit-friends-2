import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import TrainingFilter from './training-filter';

describe('Component: TrainingFilter', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <TrainingFilter onChange={() => null} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Мои тренировки Фильтр/i)).toBeInTheDocument();
  });
});
