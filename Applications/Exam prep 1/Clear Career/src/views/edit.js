import { editTemplate } from '../templates/edit-template.js';
import { getOfferDetails, putEditOffer } from '../api/api-requests.js';

export async function editPage(ctx) {
  const el = await getOfferDetails(ctx.params.id);

  ctx.render(editTemplate(onSubmit, el));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((x) => x == '')) {
      return alert('All fields must be filled');
    }

    await putEditOffer(ctx.params.id, formData);

    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
