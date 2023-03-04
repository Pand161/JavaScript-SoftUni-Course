(async () => {
  const loadBooksBtn = document.getElementById('loadBooks');
  const table = document.querySelector('table tbody');
  const form = document.querySelector('form');
  const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
  let _id = undefined;
  loadBooksBtn.addEventListener('click', loadBooks);

  await loadBooks();

  document.querySelector('form').addEventListener('submit', submitBook);

  async function editBook(data) {
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';

    form.querySelector('input').value = data.title;
    form.querySelectorAll('input')[1].value = data.author;
    form.querySelector('h3').textContent = 'Edit FORM';
    form.querySelector('button').textContent = 'Save';
  }

  async function submitBook(event) {
    const bookData = Object.fromEntries(new FormData(event.target));
    event.preventDefault();

    if (Object.values(bookData).some((x) => x == '')) {
      return;
    }

    const method = _id ? 'PUT' : 'POST';
    const url = _id ? `${baseUrl}/${_id}` : baseUrl;

    await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    event.target.reset();
    _id = undefined;
    form.querySelector('button').textContent = 'Submit';
    form.querySelector('h3').textContent = 'FORM';
    await loadBooks();
  }

  async function deleteBook(id) {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });

    await loadBooks();
  }

  async function loadBooks() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    table.innerHTML = '';

    Object.keys(data).map((key) => {
      const tr = document.createElement('tr');
      const buttons = document.createElement('td');
      const title = document.createElement('td');
      const author = document.createElement('td');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');

      title.textContent = data[key].title;
      author.textContent = data[key].author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';

      editBtn.addEventListener('click', editBook.bind(null, data[key]));
      deleteBtn.addEventListener('click', deleteBook.bind(null, key));

      buttons.appendChild(editBtn);
      buttons.appendChild(deleteBtn);
      tr.appendChild(title);
      tr.appendChild(author);
      tr.appendChild(buttons);
      table.appendChild(tr);
      _id = key;
    });
  }
})();
