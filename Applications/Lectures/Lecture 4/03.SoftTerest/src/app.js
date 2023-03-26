//import * as api from './api/users.js';
import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { initialize } from './router.js';

document.getElementById('views').remove();

const links = {
  '/': showHome,
  '/register': showRegister,
  '/login': showLogin,
  '/details': showDetails,
  '/create': showCreate,
  '/catalog': showCatalog,
};

const router = initialize(links);
router.updateNav();

router.goTo('/');
