import { homeTemplate } from '../templates/home-template.js';

export const homePage = (ctx) => {
  ctx.render(homeTemplate());
};
