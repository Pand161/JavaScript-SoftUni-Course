import { editTemplate } from '../templates/edit-template.js';
import { putEdit, getDetails } from '../api/fruits.js';

export async function editPage(ctx) {
  const element = await getDetails(ctx.params.id);

  ctx.render(editTemplate(onSubmit, element));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some((x) => x == '')) {
      return alert('All fields must be filled');
    }

    await putEdit(ctx.params.id, formData);

    ctx.page.redirect(`/details/${ctx.params.id}`);
  }
}
