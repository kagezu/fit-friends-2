import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerStore } from '../../utils/mock-data';
import SpecialForYou from './special-for-you';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../special-for-you-item/special-for-you-item', () => generateFakeComponent());

describe('Component: SpecialForYou', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <SpecialForYou />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Специально подобрано для вас/i)).toBeInTheDocument();
  });
});
