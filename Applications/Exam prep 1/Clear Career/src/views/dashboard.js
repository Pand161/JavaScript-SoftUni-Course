import { getDashboardElements } from '../api/api-requests.js';
import { dashboardTemplate } from '../templates/dashboard-template.js';

export async function dashboardPage(ctx) {
  const elements = await getDashboardElements();
  ctx.render(dashboardTemplate(elements));
}
