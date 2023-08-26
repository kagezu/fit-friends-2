import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore, fakerTraining } from '../../utils/mock-data';
import TrainingCard from './training-card';

describe('Component: TrainingCard', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <TrainingCard training={fakerTraining} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(fakerTraining.title)).toBeInTheDocument();
  });
});
