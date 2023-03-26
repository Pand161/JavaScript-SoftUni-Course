import { html } from '../../lib.js';

const userSection = (logoutEvent) => html`
  <div id="user">
    <a id="createLink" href="/create">Create Furniture</a>
    <a id="profileLink" href="/my-furniture">My Publications</a>
    <a id="logoutBtn" @click=${logoutEvent} href="#">Logout</a>
  </div>
`;

const guestSection = html`
  <div id="guest">
    <a id="loginLink" href="/login"> Login </a>
    <a id="registerLink" href="/register"> Register </a>
  </div>
`;

export const headerTemplate = (ctx, logoutEvent) => html` <header>
  <h1><a href="/">Furniture Store</a></h1>
  <nav>
    <a id="catalogLink" href="/" class="active">Dashboard</a>
    ${ctx.isAuthenticated ? userSection(logoutEvent) : guestSection}
  </nav>
</header>`;
