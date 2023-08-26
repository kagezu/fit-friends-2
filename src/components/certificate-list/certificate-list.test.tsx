import { render, screen } from '@testing-library/react';
import FakeComponent from '../../components/fake-component/fake-component';
import { Provider } from 'react-redux';
import { fakerStore } from '../../utils/mock-data';
import CertificateList from './certificate-list';

const generateFakeComponent = () => ({
  __esModule: true,
  default: () => (<FakeComponent />)
});
jest.mock('../certificate-card/certificate-card', () => generateFakeComponent());

describe('Component: CertificateList', () => {
  it('Должен отобразить компонент', () => {
    render(
      <Provider store={fakerStore}>
        <CertificateList />
      </Provider>
    );

    expect(screen.getByText(/Дипломы и сертификаты/i)).toBeInTheDocument();
  });
});
