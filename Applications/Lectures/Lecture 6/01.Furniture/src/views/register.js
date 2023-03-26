import { registerTemplate } from '../templates/register-template.js';
import { registerUser } from '../api/auth-api.js';

export function registerPage(ctx) {
  if (ctx.isAuthenticated) {
    ctx.page.redirect('/');
    return;
  }

  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (email == '' || password == '') {
      alert('Missing fields');
      return;
    }

    if (password != rePass) {
      alert('Passwords dont match');
      return;
    }

    await registerUser(email, password);

    ctx.page.redirect('/');
  }
}
