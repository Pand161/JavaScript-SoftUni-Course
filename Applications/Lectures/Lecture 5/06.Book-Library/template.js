import { html, render } from './node_modules/lit-html/lit-html.js';
import { put, get } from './util.js';

export function customTemplating() {
  const body = document.querySelector('body');
  const template = html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <form id="add-form">
      <h3>Add book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" />
    </form>

    <form id="edit-form" style="display:none">
      <input type="hidden" name="id" />
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Save" />
    </form>
  `;

  render(template, body);
}

export function booksTemplate(data) {
  const tbody = document.querySelector('tbody');
  const books = html`
    ${Object.keys(data).map((el) => {
      return html`
        <tr>
          <td>${data[el].title}</td>
          <td>${data[el].author}</td>
          <td>
            <button @click="${onClick.bind(null, el)}">Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      `;
    })}
  `;

  render(books, tbody);
}

async function onClick(id) {
  document.getElementById('add-form').style.display = 'none';
  const editForm = document.getElementById('edit-form');

  editForm.style.display = 'block';
  editForm.addEventListener('submit', editBook.bind(null, id));
  const info = await get(
    `http://localhost:3030/jsonstore/collections/books/${id}`
  );
  const title = editForm.querySelector('#edit-form input[name="title"]');
  const author = editForm.querySelector('#edit-form input[name="author"]');

  title.value = info.title;
  author.value = info.author;

  async function editBook(id, e) {
    e.preventDefault();
    const formData = new FormData(editForm);
    const title = formData.get('title');
    const author = formData.get('author');
    await put(`http://localhost:3030/jsonstore/collections/books/${id}`, {
      title: title,
      author: author,
    });

    editForm.reset();
    document.getElementById('add-form').style.display = 'block';
    editForm.style.display = 'none';
  }
}
