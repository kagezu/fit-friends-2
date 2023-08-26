import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { fakerUser } from '../../utils/mock-data';
import LookForCompanyItem from './look-for-company-item';

describe('Component: LookForCompanyItem', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <LookForCompanyItem
          user={fakerUser}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Подробнее/i)).toBeInTheDocument();
    expect(screen.getByText(fakerUser.name)).toBeInTheDocument();
  });
});
