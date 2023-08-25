import { render, screen } from '@testing-library/react';
import FakeComponent from './fake-component';
import Intro from '../../pages/intro/intro';

const generateFakeComponent = (title: string) => ({
  __esModule: true,
  default: () => (<FakeComponent title={title} />)
});

jest.mock('../../pages/intro/intro', () => generateFakeComponent('Fake component'));

describe('Component: FakeComponent', () => {
  it('Должен подменять компонент', () => {
    render(<Intro />);
    expect(screen.getByText(/Fake component/i)).toBeInTheDocument();
  });
});
