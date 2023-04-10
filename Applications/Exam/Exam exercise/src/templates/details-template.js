import { html } from '../lib.js';

export const detailsTemplate = (element, userId, onDelete) => html`<section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src=${element.imageUrl} alt="example1" />
    <p id="details-title">${element.name}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p>${element.description}</p>
        <p id="nutrition">Nutrition</p>
        <p id="details-nutrition">${element.nutrition}</p>
      </div>

      ${element._ownerId == userId ? ownerView(element, onDelete) : ''}
    </div>
  </div>
</section>`;

function ownerView(element, onDelete) {
  return html`<div id="action-buttons">
    <a href="/edit/${element._id} " id="edit-btn">Edit</a>
    <a href="#" id="delete-btn" @click=${onDelete}>Delete</a>
  </div>`;
}
