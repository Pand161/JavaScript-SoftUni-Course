import { html } from '../lib.js';

export const searchTemplate = (onSubmit, elements) => html`<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form class="search-form" @submit=${onSubmit}>
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  <div class="search-result">
    ${elements
      ? elements.length > 0
        ? createElements(elements)
        : html`<p class="no-result">No result.</p>`
      : ''}
    <!--If there are matches display a div with information about every fruit-->
  </div>
</section>`;

function createElements(elements) {
  return html`${elements.map(
    (el) => html`<div class="fruit">
      <img src=${el.imageUrl} alt="example1" />
      <h3 class="title">${el.name}</h3>
      <p class="description">${el.description}</p>
      <a class="details-btn" href="/details/${el._id}">More Info</a>
    </div>`
  )}`;
}
