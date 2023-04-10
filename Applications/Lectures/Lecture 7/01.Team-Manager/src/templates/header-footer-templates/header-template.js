import { html } from '../../lib.js';

export const headerTemplate = (ctx, logoutEvent) => html`
  <header id="titlebar" class="layout">
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
      <a href="/browse" class="action">Browse Teams</a>
      ${ctx.isAuthenticated ? userView(logoutEvent) : guestView}
    </nav>
  </header>
  <footer id="footer">SoftUni &copy; 2014-2021</footer>
`;

const guestView = html`
  <a href="/login" class="action">Login</a>
  <a href="/register" class="action">Register</a>
`;

const userView = (logoutEvent) => html`
  <a href="/my-teams" class="action">My Teams</a>
  <a href="#" class="action" @click=${logoutEvent}>Logout</a>
`;
