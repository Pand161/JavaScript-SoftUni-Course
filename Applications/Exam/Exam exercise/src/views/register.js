import { registerUser } from '../api/auth-api.js';
import { registerTemplate } from '../templates/register-template.js';

export function registerPage(ctx) {
  if (ctx.isAuthenticated) {
    ctx.page.redirect('/');
  }

  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((x) => x == '')) {
      return alert('All fields must be filled');
    }

    if (formData.password != formData['re-password']) {
      return alert('Passwords must match');
    }

    await registerUser(formData.email, formData.password);

    ctx.page.redirect('/');
  }
}
