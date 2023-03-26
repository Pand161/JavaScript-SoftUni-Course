import { page, render } from './lib.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myTeamsPage } from './views/my-teams.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('content');

page(middleware);
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/my-teams', myTeamsPage);
page('/edit', myTeamsPage);

page.start();

function middleware(ctx, next) {
  ctx.render = (content) => render(content, root);

  next();
}
