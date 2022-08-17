import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Midi File', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Midi Files');
  expect(linkElement).toBeInTheDocument();
});
