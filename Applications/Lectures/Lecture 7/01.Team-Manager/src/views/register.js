import { registerUser } from '../api/auth-api.js';
import { registerTemplate } from '../templates/auth-templates/register-template.js';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function registerPage(ctx) {
  let error = '';
  update(ctx);

  function update(ctx) {
    ctx.render(registerTemplate(onSubmit, error));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const { email, username, password, repass: rePass } = formData;

    try {
      if (Object.values(formData).some((x) => x == '')) {
        throw new Error('All inputs must be filled');
      }

      if (!emailRegex.test(email)) {
        throw new Error('Invalid Email');
      }

      if (/\d/.test(username)) {
        throw new Error('Username must not include numbers');
      }

      if (username.length < 3) {
        throw new Error('Username must be atleast 3 characters long');
      }

      if (password.length < 3) {
        throw new Error('Password must be atleast 3 characters long');
      }

      if (password != rePass) {
        throw new Error("Passwords don't match");
      }
    } catch (err) {
      error = err.message;
      update(ctx);
      return;
    }

    await registerUser(email, username, password);
    ctx.page.redirect('/');
  }
}
