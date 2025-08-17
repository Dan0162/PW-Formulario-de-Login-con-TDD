# Formulario de Login con TDD

Proyecto de ejemplo creado para practicar Desarrollo Guiado por Pruebas (TDD) en una aplicación de login.

Descripción
- Contiene una interfaz de login con estilo "glassmorphism".
- Incluye pruebas unitarias que verifican el comportamiento del formulario (por ejemplo: el botón de login está deshabilitado hasta que usuario y contraseña estén completos).
- La UI se puede servir desde `public/login.html` y la aplicación React sincroniza su estado con los inputs inyectados.

Estructura principal
- `src/` - código React y pruebas.
- `src/static/login.html` - versión estática del fragmento de login usado para pruebas.
- `public/login.html` - fragmento servido en runtime por la app.
- `src/tests/Login.test.js` - pruebas que aseguran que el botón de login solo se habilita cuando ambos campos están llenos.

Créditos
El diseño visual del formulario (estilo Glassmorphism) está basado en el tutorial y plantilla de CodingNepal:

https://www.codingnepalweb.com/create-glassmorphism-login-form-html-css/

Licencia
Este repositorio incluye modificaciones y pruebas propias. Respeta la licencia y créditos del recurso original cuando corresponda.

