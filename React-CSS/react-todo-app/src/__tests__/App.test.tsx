import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from '../App';

test('renders home page', () => {
  render(<App />);
  expect(screen.getByText(/React Todo App - Training Project/i)).toBeInTheDocument();
});

test('renders navigation menu', () => {
  render(<App />);
  expect(screen.getByText(/^Task 1$/i)).toBeInTheDocument();
  expect(screen.getByText(/^Task 2$/i)).toBeInTheDocument();
  expect(screen.getByText(/^Task 3$/i)).toBeInTheDocument();
}); 