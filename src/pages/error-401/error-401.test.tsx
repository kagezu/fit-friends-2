import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error401 from './error-401';

describe('Component: CreateTraining', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <Error401 />
      </BrowserRouter>
    );

    expect(screen.getByText(/401 Нет доступа/i)).toBeInTheDocument();
  });
});
