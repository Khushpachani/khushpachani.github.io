import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: true }));
  HTMLCanvasElement.prototype.getContext = () => null;
});

test('renders name and resume link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Khush Pachani');
  expect(screen.getAllByText(/View Resume/i).length).toBeGreaterThan(0);
});
