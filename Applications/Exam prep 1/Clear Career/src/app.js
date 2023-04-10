import { render, page } from './lib.js';
import { layoutTemplate } from './templates/layout/layout-template.js';
import { homePage } from './views/home.js';
import { getUserData } from './api/user-data.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logoutUser } from './api/auth-api.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const root = document.body;

page(decorateContext);
page(authMiddleware);
page('index.html', '/');
page('/', homePage);
page('/create', createPage);
page('/dashboard', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

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

async function logoutEvent(ctx, e) {
  e.preventDefault();
  await logoutUser();
  ctx.page.redirect('/');
}
