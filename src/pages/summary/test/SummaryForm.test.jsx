//write a test
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

//write a test to test the initial state of the summary form page
test('Inital conditions', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

//test the checkboxthe checkbox enbables button on first click and disables on second clickand disables on second click
test('Checkbox enables button on first click and disables on second click', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkBox); //waiting for the click event to be fired before moving on to the next line of code.
  expect(confirmButton).toBeEnabled();

  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});

//test the popover responds to hover function
test('popover responds to hover', async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();

  //popover starts out hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
