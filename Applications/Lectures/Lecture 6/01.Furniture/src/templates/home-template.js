import { html } from '../lib.js';

export const homeTemplate = (data) => html`<div class="row space-top">
    <div class="col-md-12">
      <h1>Welcome to Furniture System</h1>
      <p>Select furniture from the catalog to view details.</p>
    </div>
  </div>
  <div class="row space-top">
    ${html`${Object.keys(data).map(
      (el) => html`<div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src=${data[el].img} />
            <p>${data[el].description}</p>
            <footer>
              <p>Price: <span>${data[el].price} $</span></p>
            </footer>
            <div>
              <a href="/details/${data[el]._id}" class="btn btn-info"
                >Details</a
              >
            </div>
          </div>
        </div>
      </div>`
    )}`}
  </div>`;

{
  /* <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src="./images/chair.jpg" />
          <p>Description here</p>
          <footer>
            <p>Price: <span>55 $</span></p>
          </footer>
          <div>
            <a href="/details/1" class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div> */
}
