import { detailsTemplate } from '../templates/details-template.js';
import { getDetails, delBook } from '../api/api-requests.js';

export async function detailsPage(ctx) {
  const element = await getDetails(ctx.params.id);

  async function onDelete() {
    await delBook(ctx.params.id);

    ctx.page.redirect('/');
  }

  ctx.render(detailsTemplate(element, ctx.user.id, onDelete));
}
