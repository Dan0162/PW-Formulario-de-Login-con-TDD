import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el encabezado Iniciar sesión', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /iniciar sesión/i });
  expect(heading).toBeInTheDocument();
});
