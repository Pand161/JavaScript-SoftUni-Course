import { postCreate } from '../api/fruits.js';
import { createTemplate } from '../templates/create-template.js';

export function createPage(ctx) {
  if (!ctx.isAuthenticated) {
    ctx.page.redirect('/');
  }

  ctx.render(createTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((x) => x == '')) {
      return alert('All fields must be filled');
    }

    await postCreate(formData);

    ctx.page.redirect('/dashboard');
  }
}
