import { createItem } from '../api/furniture-api.js';
import { furnitureCreateTemplate } from '../templates/furnitures/furniture-create-template.js';

export function furnitureCreateView(ctx) {
  if (!ctx.isAuthenticated) {
    ctx.page.redirect('/');
    return;
  }

  const errors = {};
  update(ctx);

  function update(ctx) {
    ctx.render(furnitureCreateTemplate(onSubmit, errors));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { material, ...data } = Object.fromEntries(formData.entries());

    Object.keys(data).forEach((k) => (errors[k] = data[k] == ''));

    errors.make = data.make.length < 4;
    errors.model = data.model.length < 4;
    errors.year = Number(data.year) <= 1950 || Number(data.year) >= 2050;
    errors.description = data.description.length < 10;
    errors.price = Number(data.price) <= 0;

    const hasErrors = Object.values(errors).some((x) => x);

    update(ctx);

    if (!hasErrors) {
      data.material = material;
      await createItem(data);
      ctx.page.redirect('/');
    }
  }
}
