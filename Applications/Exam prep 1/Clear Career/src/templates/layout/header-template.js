import { html } from '../../lib.js';

export const headerTemplate = (ctx, logoutEvent) => html` <div id="wrapper">
    <header>
      <a id="logo" href="/"
        ><img id="logo-img" src="./images/logo.jpg" alt=""
      /></a>
      <nav>${ctx.isAuthenticated ? userView(logoutEvent) : guestView()}</nav>
    </header>
  </div>
  <footer>
    <p>@ClearCareer</p>
  </footer>`;

const userView = (logoutEvent) => html`
  <div class="user">
    <a href="/dashboard">Dashboard</a>
    <a href="/create">Create Offer</a>
    <a href="#" @click=${logoutEvent}>Logout</a>
  </div>
`;

const guestView = () => html`<div class="guest">
  <a href="/dashboard">Dashboard</a>
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>`;
