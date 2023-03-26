import { loginTemplate } from '../templates/login-template.js';
import { loginUser } from '../api/auth-api.js';

export function loginPage(ctx) {
  if (ctx.isAuthenticated) {
    ctx.page.redirect('/');
    return;
  }

  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    await loginUser(email, password);

    ctx.page.redirect('/');
  }
}
