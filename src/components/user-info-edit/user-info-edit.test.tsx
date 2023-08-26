import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import UserInfoEdit from './user-info-edit';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../select/select', () => generateFakeComponent());

describe('Component: UserInfoEdit', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <UserInfoEdit />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Обо мне/i)).toBeInTheDocument();
  });
});
