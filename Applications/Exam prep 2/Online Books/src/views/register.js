import { registerTemplate } from '../templates/register-template.js';
import { registerUser } from '../api/auth-api.js';

export function registerPage(ctx) {
  if (ctx.isAuthenticated) {
    ctx.page.redirect('/');
  }

  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('confirm-pass');

    if (email == '' || password == '') {
      return alert('Fill all fields');
    }

    if (password != rePass) {
      return alert('Passwords must match');
    }

    await registerUser(email, password);

    ctx.page.redirect('/');
  }
}
