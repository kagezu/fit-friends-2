import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import Intro from './intro';

describe('Component: Intro', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <Intro />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Есть аккаунт?/i)).toBeInTheDocument();
  });
});
