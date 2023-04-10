import { html } from '../lib.js';

export const dashboardTemplate = (elements) => html` <section id="dashboard">
  <h2>Job Offers</h2>
  ${elementMaker(elements)}
</section>`;

function elementMaker(elements) {
  if (elements.length < 1) {
    return html`<h2>No offers yet.</h2>`;
  }

  return html`
    ${elements.map(
      (el) => html`
        <div class="offer">
          <img src=${el.imageUrl} alt=${el.imageUrl} />
          <p><strong>Title: </strong><span class="title">${el.title}</span></p>
          <p>
            <strong>Salary:</strong><span class="salary">${el.salary}</span>
          </p>
          <a class="details-btn" href="/details/${el._id}">Details</a>
        </div>
      `
    )}
  `;
}
