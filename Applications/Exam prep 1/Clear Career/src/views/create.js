import { createTemplate } from '../templates/create-template.js';
import { postNewOffer } from '../api/api-requests.js';

export async function createPage(ctx) {
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

    if (isNaN(formData.salary)) {
      return alert('Salary must be a number');
    }

    await postNewOffer(formData);

    ctx.page.redirect('/dashboard');
  }
}
