import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import BackgroundLogo from './background-logo';

describe('Component: BackgroundLogo', () => {
  it('Должен отобразить компонент', () => {
    const { baseElement } = render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <BackgroundLogo />
        </BrowserRouter>
      </Provider>
    );

    expect(baseElement).toBeTruthy();
  });
});
