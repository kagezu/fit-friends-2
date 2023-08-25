import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerTraining } from '../../utils/mock-data';
import MyPurchases from './my-purchases';
import { NameSpace } from '../../const';
import { mockStore } from '../../utils/mock-api';
import { Training } from '../../types/training';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../../components/header/header', () => generateFakeComponent());
jest.mock('../../components/training-card/training-card', () => generateFakeComponent());
const store = mockStore({
  [NameSpace.TrainingFiltred]: [{ training: fakerTraining }] as unknown as Training[],
});
describe('Component: MyPurchases', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyPurchases />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Мои покупки/i)).toBeInTheDocument();
  });
});
