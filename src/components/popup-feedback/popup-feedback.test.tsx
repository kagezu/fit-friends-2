import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import PopupFeedback from './popup-feedback';

describe('Component: PopupFeedback', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <PopupFeedback
            trainingId={'id'}
            onClose={() => null}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
  });
});
