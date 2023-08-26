import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserNavigation from './user-navigation';

describe('Component: UserNavigation', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <UserNavigation />
      </BrowserRouter>
    );
    expect(screen.getByText(/Мои друзья/i)).toBeInTheDocument();
    expect(screen.getByText(/Мои покупки/i)).toBeInTheDocument();
  });
});
