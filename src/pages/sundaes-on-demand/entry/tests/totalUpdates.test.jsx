import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType='scoops' />); // This can be a redux provider, it can be a router

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false }); //partial match
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla', //the label will be recognized in the name option.
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');
});
