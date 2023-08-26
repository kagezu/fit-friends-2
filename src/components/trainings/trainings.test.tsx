import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import Trainings from './trainings';

const TITLE = 'Component: Trainings';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../training-card/training-card', () => generateFakeComponent());

describe('Component: Trainings', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <Trainings
            params={{}}
            title={TITLE}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });
});
