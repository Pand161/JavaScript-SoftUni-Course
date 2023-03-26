import { loginTemplate } from '../templates/auth-templates/login-template.js';
import { loginUser } from '../api/auth-api.js';

export function loginPage(ctx) {
  let error = '';
  update(ctx);

  function update(ctx) {
    ctx.render(loginTemplate(onSubmit, error));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await loginUser(email, password);
      ctx.page.redirect('/');
    } catch (err) {
      error = err;
      update(ctx);
    }
  }
}
