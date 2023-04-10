import { loginTemplate } from '../templates/login-template.js';
import { loginUser } from '../api/auth-api.js';

export const loginPage = (ctx) => {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email == '' || password == '') {
      return alert('fill all fields');
    }

    await loginUser(email, password);

    ctx.page.redirect('/');
  }
};
