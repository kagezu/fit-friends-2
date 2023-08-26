import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fakerCoach, fakerStore } from '../../utils/mock-data';
import PopupCertificates from './popup-certificates';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../certificate-card/certificate-card', () => generateFakeComponent());

describe('Component: PopupCertificates', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <BrowserRouter>
          <PopupCertificates
            user={fakerCoach}
            onClose={() => null}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Сертификаты/i)).toBeInTheDocument();
  });
});
