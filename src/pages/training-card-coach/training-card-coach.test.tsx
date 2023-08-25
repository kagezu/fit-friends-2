import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import TrainingCardCoach from './training-card-coach';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/feedback-list/feedback-list', () => generateFakeComponent());
jest.mock('../../components/video-player/video-player', () => generateFakeComponent());
jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual<typeof import('react-router-dom')>('react-router-dom'),
  useNavigate: () => (() => undefined),
  useParams: () => ({ id: 'value' })
}));

describe('Component: TrainingCardCoach', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <TrainingCardCoach />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Карточка тренировки/i)).toBeInTheDocument();
  });
});
