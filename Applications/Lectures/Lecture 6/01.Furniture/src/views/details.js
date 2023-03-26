import { deleteItem, getById } from '../api/furniture-api.js';
import { detailsTemplate } from '../templates/details-template.js';

export async function detailsPage(ctx) {
  const el = await getById(ctx.params.id);

  const removeItem = async () => {
    await deleteItem(el._id);
    ctx.page.redirect('/');
  };

  ctx.render(detailsTemplate(el, ctx.user.id, removeItem));
}
