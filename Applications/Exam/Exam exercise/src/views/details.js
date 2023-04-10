import { getDetails, deleteFruit } from '../api/fruits.js';
import { detailsTemplate } from '../templates/details-template.js';

export async function detailsPage(ctx) {
  const element = await getDetails(ctx.params.id);

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this fruit?');

    if (choice) {
      await deleteFruit(ctx.params.id);

      ctx.page.redirect('/dashboard');
    }
  }

  ctx.render(detailsTemplate(element, ctx.user.id, onDelete));
}
