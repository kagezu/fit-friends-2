import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fakerStore } from '../../utils/mock-data';
import Select from './select';

const TEXT = 'Component: Select';

describe('Component: Select', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <Select
          text={TEXT}
          name='select'
          error=''
          onUpdate={() => null}
          options={[]}
        />
      </Provider>
    );
    expect(screen.getByText(TEXT)).toBeInTheDocument();
  });
});
