import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import UsersFilter from './users-filter';

describe('Component: UsersFilter', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <UsersFilter
            onChange={() => null}
            params={{}}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Каталог пользователя/i)).toBeInTheDocument();
  });
});
