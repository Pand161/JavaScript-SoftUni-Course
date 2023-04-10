import { html } from '../../lib.js';

export const headerTemplate = (ctx, logoutEvent) => html` <header>
  <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="/dashboard">Fruits</a>
      <a href="/search">Search</a>
    </div>
    ${ctx.isAuthenticated ? userView(logoutEvent) : guestView()}
  </nav>
</header>`;

function guestView() {
  return html`<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`;
}

function userView(logoutEvent) {
  return html` <div class="user">
    <a href="/create">Add Fruit</a>
    <a href="#" @click=${logoutEvent}>Logout</a>
  </div>`;
}
