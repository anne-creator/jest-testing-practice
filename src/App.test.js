import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and turned to blue backgroud with "change to blue" text when clicking', () => {
  render(<App />); //render the component at the very beginning

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ background: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ background: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // initial state is unchecked box and enabled button(red bg and black text)
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test('disabled button has white background and reverts to black', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { color: 'black' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle('color: white');

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle('color: black');
});
