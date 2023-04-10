import { page, render } from './lib.js';
import { getUserData } from './api/user-data.js';
import { logoutUser } from './api/auth-api.js';
import { layoutTemplate } from './templates/layout-template/layout.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myBooksPage } from './views/my-books.js';

const root = document.getElementById('container');

page(decorateContext);
page(authMiddleware);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-books', myBooksPage);
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) =>
    render(layoutTemplate(ctx, content, logoutEvent.bind(null, ctx)), root);

  next();
}

function authMiddleware(ctx, next) {
  ctx.user = JSON.parse(getUserData() || '{}');
  ctx.isAuthenticated = Object.keys(ctx.user).length > 0;

  next();
}

async function logoutEvent(ctx) {
  await logoutUser();
  ctx.page.redirect('/');
}
