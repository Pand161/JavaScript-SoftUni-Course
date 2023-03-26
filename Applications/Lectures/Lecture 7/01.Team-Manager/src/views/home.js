import { homeTemplate } from '../templates/home-template.js';

export function homePage(ctx) {
  ctx.render(homeTemplate());
}
