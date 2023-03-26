import { html } from '../lib.js';

export const header = () => html`
  <header id="titlebar" class="layout">
    <a href="#" class="site-logo">Team Manager</a>
    <nav>
      <a href="#" class="action">Browse Teams</a>
      <a href="#" class="action">Login</a>
      <a href="#" class="action">Register</a>
      <a href="#" class="action">My Teams</a>
      <a href="#" class="action">Logout</a>
    </nav>
  </header>
`;
