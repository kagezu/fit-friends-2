import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyOrderCard from './my-order-card';
import { fakerTraining } from '../../utils/mock-data';

describe('Component: MyOrderCard', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <MyOrderCard training={fakerTraining} />
      </BrowserRouter>
    );
    expect(screen.getByText(fakerTraining.description)).toBeInTheDocument();
  });
});
