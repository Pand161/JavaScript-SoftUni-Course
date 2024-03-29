import { page, render } from './lib.js';
import { layoutTemplate } from './templates/header-footer-templates/layout-template.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myTeamsPage } from './views/my-teams.js';
import { registerPage } from './views/register.js';
import { getUserData } from './api/user-data.js';
import { browsePage } from './views/browse.js';
import { editPage } from './views/edit.js';
import { logoutUser } from './api/auth-api.js';
import { detailsPage } from './views/details.js';

const root = document.getElementById('content');

page(middleware);
page(authMiddleware);
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/my-teams', myTeamsPage);
page('/edit', editPage);
page('/browse', browsePage);
page('/details/:id', detailsPage);

page.start();

function middleware(ctx, next) {
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
