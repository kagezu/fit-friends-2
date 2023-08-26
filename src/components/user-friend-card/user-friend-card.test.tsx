import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerCoach, fakerPersonalOrder, fakerStore, fakerUser } from '../../utils/mock-data';
import UserFriendCard from './user-friend-card';
import { Role } from '../../const';

describe('Component: UserFriendCard', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <UserFriendCard
            user={fakerCoach}
            userId={fakerUser.id}
            order={fakerPersonalOrder}
            role={Role.User}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(fakerCoach.name)).toBeInTheDocument();
  });
});
