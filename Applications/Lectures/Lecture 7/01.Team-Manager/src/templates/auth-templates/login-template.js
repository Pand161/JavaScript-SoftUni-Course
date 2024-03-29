import { html } from '../../lib.js';

export const loginTemplate = (onSubmit, error) => html`
  <section id="login">
    <article class="narrow">
      <header class="pad-med">
        <h1>Login</h1>
      </header>
      <form id="login-form" class="main-form pad-large" @submit=${onSubmit}>
        ${error.length > 0 ? showError(error) : ''}
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <input class="action cta" type="submit" value="Sign In" />
      </form>
      <footer class="pad-small">
        Don't have an account?
        <a href="/register" class="invert">Sign up here</a>
      </footer>
    </article>
  </section>
`;

const showError = (error) => html`<div class="error">${error}</div>`;
