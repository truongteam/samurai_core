import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// To Test
import App from '../Sample';

// Tests
test('Renders main page correctly', async () => {
  // Setup
  render(<App />);
  // const user = userEvent.setup();

  const buttonCount = await screen.findByRole('button');
  const codeCount = await screen.queryByText(/The count is now:/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe('count is: 0');
  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).not.toBeInTheDocument();

  // Init
  await userEvent.click(buttonCount);
  await userEvent.click(buttonCount);
  // Post Expectations
  expect(buttonCount.innerHTML).toBe('count is: 2');
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});