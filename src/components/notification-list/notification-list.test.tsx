import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fakerNotifies, fakerStore } from '../../utils/mock-data';
import NotificationList from './notification-list';

describe('Component: NotificationList', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <NotificationList notifications={fakerNotifies} />
      </Provider>
    );

    expect(screen.getByText(/Оповещения/i)).toBeInTheDocument();
  });
});
