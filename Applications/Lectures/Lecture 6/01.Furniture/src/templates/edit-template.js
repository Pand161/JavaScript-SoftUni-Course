import { html } from '../lib.js';

export const editTemplate = (el, onSubmit, errors) => {
  return html` <div class="row space-top">
      <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${onSubmit}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input
              class=${createHTMLClass(errors.make)}
              id="new-make"
              type="text"
              name="make"
              value=${el.make}
            />
          </div>
          <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input
              class=${createHTMLClass(errors.model)}
              id="new-model"
              type="text"
              name="model"
              value=${el.model}
            />
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input
              class=${createHTMLClass(errors.year)}
              id="new-year"
              type="number"
              name="year"
              value=${el.year}
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-description"
              >Description</label
            >
            <input
              class=${createHTMLClass(errors.description)}
              id="new-description"
              type="text"
              name="description"
              value=${el.description}
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input
              class=${createHTMLClass(errors.price)}
              id="new-price"
              type="number"
              name="price"
              value=${el.price}
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input
              class=${createHTMLClass(errors.img)}
              id="new-image"
              type="text"
              name="img"
              value="${el.img}"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-material"
              >Material (optional)</label
            >
            <input
              class="form-control"
              id="new-material"
              type="text"
              name="material"
              value=${el.material}
            />
          </div>
          <input type="submit" class="btn btn-info" value="Edit" />
        </div>
      </div>
    </form>`;
};

function createHTMLClass(error) {
  return 'form-control ' + (error ? 'is-invalid' : '');
}
