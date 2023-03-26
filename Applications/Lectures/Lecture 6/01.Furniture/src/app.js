import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { detailsPage } from './views/details.js';
import { furnitureCreateView } from './views/furniture-create.js';
import { myFurniturePage } from './views/my-furniture.js';
import { editPage } from './views/edit.js';
import { render, page } from './lib.js';
import * as auth from './api/auth-api.js';
import { layoutTemplate } from './templates/header-and-layout/layout-template.js';
import { getUserData } from './api/user-data.js';

window.api = auth;

const root = document.querySelector('div.container');

page(decorateContext);
page(authMiddleware);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', furnitureCreateView);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-furniture', myFurniturePage);

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
  await auth.logoutUser();
  ctx.page.redirect('/');
}
