import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioGroup from './RadioGroup';

test('radio group', () => {
  render(<RadioGroup />);

  const button = screen.getByRole('button', { name: 'button' });
  expect(button).toBeDisabled();

  const radio = screen.getByRole('radio', { name: 'Strawberry' });
  userEvent.click(radio);

  expect(button).toBeEnabled();
});
