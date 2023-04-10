import { html } from '../lib.js';

export const detailsTemplate = (element, ownerId, onDelete) => html`<section
  id="details-page"
  class="details"
>
  <div class="book-information">
    <h3>${element.title}</h3>
    <p class="type">Type: ${element.type}</p>
    <p class="img"><img src=${element.imageUrl} /></p>
    <div class="actions">
      <!-- Edit/Delete buttons ( Only for creator of this book )  -->
      ${element._ownerId == ownerId ? userView(element, onDelete) : ''}

      <!-- Bonus -->
      <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
      <a class="button" href="#">Like</a>

      <!-- ( for Guests and Users )  -->
      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: 0</span>
      </div>
      <!-- Bonus -->
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${element.description}</p>
  </div>
</section>`;

function userView(element, onDelete) {
  return html`
    <a class="button" href="/edit/${element._id}">Edit</a>
    <a class="button" href="#" @click=${onDelete}>Delete</a>
  `;
}
