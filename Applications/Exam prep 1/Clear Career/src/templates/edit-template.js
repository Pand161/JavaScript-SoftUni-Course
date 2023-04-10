import { html } from '../lib.js';

export const editTemplate = (onSubmit, el) => html`<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        value=${el.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        value=${el.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        value=${el.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      >
${el.description}</textarea
      >
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      >
${el.requirements}</textarea
      >
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        value=${el.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;
