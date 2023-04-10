import { headerTemplate } from './header-template.js';
import { html } from '../../lib.js';

export const layoutTemplate = (
  ctx,
  content,
  logoutEvent
) => html` ${headerTemplate(ctx, logoutEvent)}
  <main>${content}</main>`;
