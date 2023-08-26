import { act, render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import FeedbackList from './feedback-list';
import userEvent from '@testing-library/user-event';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../popup-feedback/popup-feedback', () => generateFakeComponent());

describe('Component: FeedbackList', () => {
  it('Должен отобразить компонент и при клике по кнопке открыть попап', async () => {
    render(
      <Provider store={fakerStore} >
        <BrowserRouter>
          <FeedbackList
            trainingId=''
            count={1}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.queryByText(/Fake component./i)).not.toBeInTheDocument();
    await act(async () => await userEvent.click(screen.getByText(/Оставить отзыв/i)));
    expect(screen.getByText(/Fake component./i)).toBeInTheDocument();
  });
});
