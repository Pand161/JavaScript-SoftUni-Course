import { getOfferDetails } from '../api/api-requests.js';
import { detailsTemplate } from '../templates/details-template.js';
import { deleteOffer } from '../api/api-requests.js';

export async function detailsPage(ctx) {
  const el = await getOfferDetails(ctx.params.id);

  async function deleteCurrentOffer() {
    const choice = confirm('Are you sure you want to delete this offer?');

    if (choice) {
      const waitTime = await deleteOffer(ctx.params.id);
      ctx.page.redirect('/dashboard');
    }
  }

  ctx.render(
    detailsTemplate(el, ctx.user.id, ctx.params.id, deleteCurrentOffer)
  );
}
