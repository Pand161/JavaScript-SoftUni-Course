import { registerTemplate } from '../templates/auth-templates/register-template.js';

export function registerPage(ctx) {
  ctx.render(registerTemplate());
}
