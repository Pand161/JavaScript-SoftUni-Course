import { html } from '../../lib.js';
import { headerTemplate } from './header-template.js';

export const layoutTemplate = (ctx, content, logoutEvent) => html`
  ${headerTemplate(ctx, logoutEvent)} ${content}
`;
