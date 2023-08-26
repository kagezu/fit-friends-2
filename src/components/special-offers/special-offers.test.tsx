import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import SpecialOffers from './special-offers';

describe('Component: SpecialOffers', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <SpecialOffers />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Специальные предложения/i)).toBeInTheDocument();
  });
});
