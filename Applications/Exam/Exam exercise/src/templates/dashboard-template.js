import { html } from '../lib.js';

export const dashboardTemplate = (elements) => html`
  <h2>Fruits</h2>
  <section id="dashboard">
    ${elements.length > 0
      ? createElements(elements)
      : html`<h2>No fruit info yet.</h2>`}
  </section>
`;

function createElements(elements) {
  return html`${elements.map(
    (el) => html` <div class="fruit">
      <img src=${el.imageUrl} alt="example1" />
      <h3 class="title">${el.name}</h3>
      <p class="description">${el.description}</p>
      <a class="details-btn" href="/details/${el._id}">More Info</a>
    </div>`
  )}`;
}

{
  /* <div class="fruit">
      <img src="./images/fruit 1.png" alt="example1" />
      <h3 class="title">Pineapple</h3>
      <p class="description">
        The pineapple is a tropical plant with an edible fruit. It is the most
        economically significant plant in the family Bromeliaceae.The pineapple
        is indigenous to South America. Pineapples grow as a small shrub, the
        individual flowers of the unpollinated plant fuse to form a multiple
        fruit. The plant is normally propagated from the offset produced at the
        top of the fruit,or from a side shoot, and typically matures within a
        year.
      </p>
      <a class="details-btn" href="">More Info</a>
    </div> */
}
