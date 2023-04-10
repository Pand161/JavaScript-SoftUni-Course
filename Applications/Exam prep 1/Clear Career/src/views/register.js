import { registerTemplate } from '../templates/register-template.js';
import { registerUser } from '../api/auth-api.js';

export const registerPage = (ctx) => {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some((x) => x == '')) {
      return alert('Fill all the fields');
    }

    await registerUser(formData.email, formData.password);

    ctx.page.redirect('/');
  }
};
