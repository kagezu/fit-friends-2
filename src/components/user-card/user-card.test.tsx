import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserCard from './user-card';
import { fakerUser } from '../../utils/mock-data';

describe('Component: UserCard', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <UserCard user={fakerUser} />
      </BrowserRouter>
    );
    expect(screen.getByText(fakerUser.name)).toBeInTheDocument();
  });
});
