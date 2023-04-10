import { html } from '../lib.js';

export const myBooksTemplate = (elements) => html` <section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>

  ${elements.length > 0
    ? createElements(elements)
    : html`<p class="no-books">No books in database!</p>`}
</section>`;

function createElements(elements) {
  return html`<ul class="my-books-list">
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
