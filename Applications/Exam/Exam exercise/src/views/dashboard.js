import { dashboardTemplate } from '../templates/dashboard-template.js';
import { getDashboard } from '../api/fruits.js';

export async function dashboardPage(ctx) {
  const elements = await getDashboard();

  ctx.render(dashboardTemplate(elements));
}
