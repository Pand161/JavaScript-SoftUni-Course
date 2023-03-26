import { editTemplate } from '../templates/edit-template.js';

export const editPage = (ctx) => {
  ctx.render(editTemplate());
};
