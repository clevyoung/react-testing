import { render, screen, fireEvent } from '@testing-library/react';
import ColorButton from './ColorButton';

test('button has correct initial color', () => {
  render(<ColorButton />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ background: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red
  expect(colorButton).toHaveTextContent('Change to red');
});
