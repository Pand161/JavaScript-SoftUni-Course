import { html } from '../lib.js';

export const browseTemplate = (ctx, teams) => html`
  <section id="browse">
    <article class="pad-med">
      <h1>Team Browser</h1>
    </article>

    ${ctx.isAuthenticated ? userView() : ''} ${renderTeams(teams)}
  </section>
`;

{
  /* <article class="layout">
      <img src="./assets/rocket.png" class="team-logo left-col" />
      <div class="tm-preview">
        <h2>Team Rocket</h2>
        <p>Gotta catch 'em all!</p>
        <span class="details">3 Members</span>
        <div><a href="#" class="action">See details</a></div>
      </div>
    </article> */
}

function renderTeams(teams) {
  return html` ${teams.map((el) => teamTemplate(el))}`;
}

const teamTemplate = (team) => html`
  <article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col" />
    <div class="tm-preview">
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <span class="details">${team.memberCount} Members</span>
      <div>
        <a href="/details/${team._id}" class="action">See details</a>
      </div>
    </div>
  </article>
`;

const userView = () => html` <article class="layout narrow">
  <div class="pad-small">
    <a href="#" class="action cta">Create Team</a>
  </div>
</article>`;
