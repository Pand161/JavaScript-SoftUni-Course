import { getMyTeams, getTeams } from '../api/api-team-requests.js';
import { browseTemplate } from '../templates/browse-template.js';
import { html } from '../lib.js';

export const browsePage = async (ctx) => {
  const teams = await getTeams();

  ctx.render(browseTemplate(ctx, teams));
};

{
  /* <article class="layout">
      <img src="./assets/atat.png" class="team-logo left-col" />
      <div class="tm-preview">
        <h2>Storm Troopers</h2>
        <p>These ARE the droids we're looking for</p>
        <span class="details">5000 Members</span>
        <div><a href="#" class="action">See details</a></div>
      </div>
    </article> */
}
