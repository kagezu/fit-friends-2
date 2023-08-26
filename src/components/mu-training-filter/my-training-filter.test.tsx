import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import MyTrainingFilter from './my-training-filter';

describe('Component: MyTrainingFilter', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <MyTrainingFilter onChange={() => null} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Мои тренировки Фильтр/i)).toBeInTheDocument();
  });
});
