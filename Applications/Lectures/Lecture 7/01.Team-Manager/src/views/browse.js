import { browseTemplate } from '../templates/browse-template.js';

export const browsePage = (ctx) => {
  ctx.render(browseTemplate());
};
