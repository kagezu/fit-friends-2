import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CoachNavigation from './coach-navigation';

describe('Component: CoachNavigation', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <CoachNavigation />
      </BrowserRouter>
    );

    expect(screen.getByText(/Мои тренировки/i)).toBeInTheDocument();
    expect(screen.getByText(/Создать тренировку/i)).toBeInTheDocument();
    expect(screen.getByText(/Мои друзья/i)).toBeInTheDocument();
    expect(screen.getByText(/Мои заказы/i)).toBeInTheDocument();
  });
});
