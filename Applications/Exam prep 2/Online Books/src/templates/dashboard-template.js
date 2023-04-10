import { html } from '../lib.js';

export const dashboardTemplate = (elements) => html`<section
  id="dashboard-page"
  class="dashboard"
>
  <h1>Dashboard</h1>
  ${elements.length > 0
    ? displayElements(elements)
    : html`<p class="no-books">No books in database!</p>`}
</section>`;

function displayElements(elements) {
  return html`<ul class="other-books-list">
    ${elements.map(
      (el) => html` <li class="otherBooks">
        <h3>${el.title}</h3>
        <p>Type: ${el.type}</p>
        <p class="img"><img src=${el.imageUrl} /></p>
        <a class="button" href="/details/${el._id}">Details</a>
      </li>`
    )}
  </ul>`;
}

{
  /* <ul class="other-books-list">
    <li class="otherBooks">
      <h3>A Court of Thorns and Roses</h3>
      <p>Type: Fiction</p>
      <p class="img"><img src="./images/book1.png" /></p>
      <a class="button" href="#">Details</a>
    </li>
  </ul> */
}
