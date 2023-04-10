import { html } from '../lib.js';

export const editTemplate = (onSubmit, element) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fruit</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
        value=${element.name}
      />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image URL"
        value=${element.imageUrl}
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      >
${element.description}</textarea
      >
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      >
${element.nutrition}</textarea
      >
      <button type="submit">post</button>
    </form>
  </div>
</section>`;
