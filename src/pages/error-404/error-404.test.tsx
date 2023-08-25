import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error404 from './error-404';

describe('Component: CreateTraining', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    );

    expect(screen.getByText(/404 Страница не найдена/i)).toBeInTheDocument();
  });
});
