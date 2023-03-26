import { getAll } from '../api/furniture-api.js';
import { homeTemplate } from '../templates/home-template.js';

export async function homePage(ctx) {
  const data = await getAll();
  ctx.render(homeTemplate(data));
}
