import { loginTemplate } from '../templates/auth-templates/login-template.js';

export function loginPage(ctx) {
  ctx.render(loginTemplate());
}
