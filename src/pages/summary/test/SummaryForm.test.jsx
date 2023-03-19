//write a test
import { render, screen, fireEvent } from '@testing-library/react';
import SummeryForm from '../SummeryForm';

//write a test to test the initial state of the summary form page
test('Inital conditions', () => {
  render(<SummeryForm />);
  const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).not.toBeDisabled();
});

//test the checkboxthe checkbox enbables button on first click and disables on second clickand disables on second click

test('Checkbox enables button on first click and disables on second click', () => {
  render(<SummeryForm />);

  const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  fireEvent.click(checkBox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkBox);
  expect(confirmButton).toBeDisabled();
});
