import { customTemplating, booksTemplate } from './template.js';
import { get, post } from './util.js';

customTemplating();

const loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click', getAllBooks);

const addBooksForm = document.getElementById('add-form');
addBooksForm.addEventListener('submit', addBook);

async function addBook(e) {
  e.preventDefault();
  const formData = new FormData(addBooksForm);
  const title = formData.get('title');
  const author = formData.get('author');
  await post('http://localhost:3030/jsonstore/collections/books', {
    title,
    author,
  });

  addBooksForm.reset();
}

async function getAllBooks(e) {
  e.preventDefault();
  const data = await get('http://localhost:3030/jsonstore/collections/books');
  booksTemplate(data);
}

{
  /* <tr>
                <td>Game of Thrones</td>
                <td>George R. R. Martin</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr> */
}
