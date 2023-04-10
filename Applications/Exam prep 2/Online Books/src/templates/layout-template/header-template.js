import { html } from '../../lib.js';

export const headerTemplate = (ctx, logoutEvent) => html`
  <header id="site-header">
    <nav class="navbar">
      <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${ctx.isAuthenticated ? userView(ctx, logoutEvent) : guestView()}
      </section>
    </nav>
  </header>
`;

const guestView = () => html`<div id="guest">
  <a class="button" href="/login">Login</a>
  <a class="button" href="/register">Register</a>
</div>`;

const userView = (ctx, logoutEvent) => html`<div id="user">
  <span>Welcome, ${ctx.user.email}</span>
  <a class="button" href="/my-books">My Books</a>
  <a class="button" href="/create">Add Book</a>
  <a class="button" href="#" @click=${logoutEvent}>Logout</a>
</div>`;
