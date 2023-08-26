import { render, screen } from '@testing-library/react';
import SpecialForYouItem from './special-for-you-item';
import { BrowserRouter } from 'react-router-dom';
import { fakerTraining } from '../../utils/mock-data';

describe('Component: SpecialForYouItem', () => {
  it('Должен отобразить компонент', () => {
    render(
      <BrowserRouter>
        <SpecialForYouItem training={fakerTraining} />
      </BrowserRouter>
    );
    expect(screen.getByText(fakerTraining.trainingType)).toBeInTheDocument();
  });
});
