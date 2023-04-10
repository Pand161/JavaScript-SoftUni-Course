import { loginTemplate } from '../templates/login-template.js';
import { loginUser } from '../api/auth-api.js';

export function loginPage(ctx) {
  if (ctx.isAuthenticated) {
    ctx.page.redirect('/');
  }

  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((x) => x == '')) {
      return alert('Fill all fields');
    }

    await loginUser(formData.email, formData.password);

    ctx.page.redirect('/');
  }
}
