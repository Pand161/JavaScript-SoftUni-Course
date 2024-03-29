import { html } from '../../lib.js';

const itemsTemplate = (ownerItems) => html`
  ${ownerItems.map(
    (item) => html`
      <div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
              <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
              <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
          </div>
        </div>
      </div>
    `
  )}
`;

export const myFurnitureTemplate = (ownerItems) => html`<div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>My Furniture</h1>
      <p>This is a list of your publications.</p>
    </div>
  </div>
  <div class="row space-top">${itemsTemplate(ownerItems)}</div>`;

{
  /* <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="./images/table.png" />
          <p>Description here</p>
          <footer>
            <p>Price: <span>235 $</span></p>
          </footer>
          <div>
            <a href="#" class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div> */
}
