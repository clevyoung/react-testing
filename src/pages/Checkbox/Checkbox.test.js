import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Checkbox disables button on first click and enables on second click', () => {
  render(<Checkbox />);

  const button = screen.getByRole('button', { name: '버튼' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
