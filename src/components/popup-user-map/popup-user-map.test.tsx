import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore, fakerUser } from '../../utils/mock-data';
import PopupUserMap from './popup-user-map';

describe('Component: PopupUserMap', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <PopupUserMap
            user={fakerUser}
            onClose={() => null}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(fakerUser.name)).toBeInTheDocument();
  });
});
