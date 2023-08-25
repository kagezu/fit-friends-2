import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import QuestionnaireUser from './questionnaire-user';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/background-logo/background-logo', () => generateFakeComponent());

describe('Component: QuestionnaireUser', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <QuestionnaireUser />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Опросник/i)).toBeInTheDocument();
  });
});
