import { render, screen } from '@testing-library/react';
import CertificateCard from './certificate-card';

describe('Component: CertificateCard', () => {
  it('Должен отобразить компонент без кнопок редактирования', () => {
    const { baseElement } = render(
      <CertificateCard
        id={''}
        path={''}
        onDelete={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(screen.queryByText(/Изменить/i)).not.toBeInTheDocument();
  });

  it('Должен отобразить компонент с кнопками редактирования', () => {
    render(
      <CertificateCard
        id={''}
        path={''}
        onDelete={() => null}
        editable
      />
    );
    expect(screen.getByText(/Изменить/i)).toBeInTheDocument();
    expect(screen.getByText(/Сохранить/i)).toBeInTheDocument();
  });
});
