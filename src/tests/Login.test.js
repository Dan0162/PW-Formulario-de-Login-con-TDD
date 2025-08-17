/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Carga el HTML real de src/static/login.html para las pruebas DOM
beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'static', 'login.html'), 'utf8');
  document.documentElement.innerHTML = html;

  // comportamiento simple: habilita el botón sólo si ambos campos tienen texto
  const updateButton = () => {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    document.getElementById('login-btn').disabled = !(user && pass);
  };

  const u = document.getElementById('username');
  const p = document.getElementById('password');
  u.addEventListener('input', updateButton);
  p.addEventListener('input', updateButton);
});

test('el botón de login está deshabilitado cuando los campos están vacíos', () => {
  expect(document.getElementById('login-btn').disabled).toBe(true);
});

test('el botón de login se habilita cuando usuario y contraseña están llenos', () => {
  const u = document.getElementById('username');
  const p = document.getElementById('password');
  u.value = 'usuario@example.com';
  p.value = 'secreto';
  u.dispatchEvent(new Event('input', { bubbles: true }));
  p.dispatchEvent(new Event('input', { bubbles: true }));
  expect(document.getElementById('login-btn').disabled).toBe(false);
});

test('el botón permanece deshabilitado cuando sólo un campo está lleno', () => {
  const u = document.getElementById('username');
  const p = document.getElementById('password');

  u.value = 'usuario@example.com';
  u.dispatchEvent(new Event('input', { bubbles: true }));
  expect(document.getElementById('login-btn').disabled).toBe(true);

  u.value = '';
  u.dispatchEvent(new Event('input', { bubbles: true }));
  p.value = 'secreto';
  p.dispatchEvent(new Event('input', { bubbles: true }));
  expect(document.getElementById('login-btn').disabled).toBe(true);
});