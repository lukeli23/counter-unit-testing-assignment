// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId(/count/i);
  // Ensures that text is exactly '0' and not '00' or '01'
  expect(count.textContent).toMatch(/^0$/);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^1$/);

  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^2$/);

  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^3$/);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^-1$/);

  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^-2$/);

  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId(/count/i).textContent).toMatch(/^-3$/);
});
