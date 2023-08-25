import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import UserCardDetail from './user-card-detail';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/trainings/trainings', () => generateFakeComponent());
jest.mock('../../components/popup-user-map/popup-user-map', () => generateFakeComponent());
jest.mock('../../components/popup-certificates/popup-certificates', () => generateFakeComponent());
jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual<typeof import('react-router-dom')>('react-router-dom'),
  useNavigate: () => (() => undefined),
  useParams: () => ({ id: 'value' })
}));

describe('Component: UserCardDetail', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <UserCardDetail />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Карточка пользователя/i)).toBeInTheDocument();
  });
});
