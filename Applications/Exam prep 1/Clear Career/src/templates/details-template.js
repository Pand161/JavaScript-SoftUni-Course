import { html } from '../lib.js';

export const detailsTemplate = (
  el,
  userId,
  elementId,
  deleteCurrentOffer
) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${el.imageUrl} alt="example1" />
      <p id="details-title">${el.title}</p>
      <p id="details-category">
        Category: <span id="categories">${el.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${el.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${el.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${el.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">1</strong></p>

      ${userId == el._ownerId ? ownerView(elementId, deleteCurrentOffer) : ''}
    </div>
  </section>
`;

function ownerView(elementId, deleteCurrentOffer) {
  return html`<!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="/edit/${elementId}" id="edit-btn">Edit</a>
      <a @click=${deleteCurrentOffer} href="#" id="delete-btn">Delete</a>
    </div>`;
}
