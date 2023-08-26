import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fakerStore } from '../../utils/mock-data';
import Schedule from './schedule';

describe('Component: Schedule', () => {
  it('Должен отобразить компонент', () => {
    const { baseElement } = render(
      <Provider store={fakerStore}>
        <Schedule />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
