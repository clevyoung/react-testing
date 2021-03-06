import { render, screen } from '../../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

// It displays an image for each of the options that were returned from the server.
// It's not actually returning from the server, but is returning from service worker.
test('display image for each scoop from server', async () => {
  render(<Options optionType='scoops' />);

  // find images - alt text for every image is going to end with the string scoop.
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toEqual(['Vanilla scoop', 'Chocolate scoop']);
});

test('display image for each topping', async () => {
  // Mock Service Worker will return three toppings from server.
  render(<Options optionType='toppings' />);

  // find images, expect 3 based on what msw returns
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // check the actual alt text for the images
  const altText = toppingImages.map((img) => img.alt);

  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});

test("don't update total if scoops input is invalid", async () => {
  render(<Options optionType='scoops' />);

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '-1');

  // make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText('Scoops total: $0.00');
  expect(scoopsSubtotal).toBeInTheDocument();
});
