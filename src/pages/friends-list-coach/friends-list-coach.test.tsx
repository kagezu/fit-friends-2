import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import FriendsListCoach from './friends-list-coach';

const generateFakeComponent = (title: string) => ({
  __esModule: true,
  default: () => (<FakeComponent title={title} />)
});
jest.mock('../../components/header/header', () => generateFakeComponent('Header component'));

describe('Component: FriendsListCoach', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <FriendsListCoach />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Мои друзья/i)).toBeInTheDocument();
  });
});
