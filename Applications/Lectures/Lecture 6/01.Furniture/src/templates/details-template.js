import { html } from '../lib.js';

const ownerTemplate = (el, removeItem) => html` <div>
  <a href="/edit/${el._id}" class="btn btn-info">Edit</a>
  <a @click=${removeItem} href="#" class="btn btn-red">Delete</a>
</div>`;

export const detailsTemplate = (el, ownerId, removeItem) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="${el.img}" />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${el.make}</span></p>
      <p>Model: <span>${el.model}</span></p>
      <p>Year: <span>${el.year}</span></p>
      <p>Description: <span>${el.description}</span></p>
      <p>Price: <span>${el.price}</span></p>
      <p>Material: <span>${el.material}</span></p>
      ${el._ownerId == ownerId ? ownerTemplate(el, removeItem) : ''}
    </div>
  </div>`;
