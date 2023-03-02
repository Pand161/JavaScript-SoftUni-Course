function attachEvents() {
  const loadBtn = document.getElementById('btnLoad');
  const createBtn = document.getElementById('btnCreate');
  const nameInput = document.getElementById('person');
  const phoneInput = document.getElementById('phone');
  const phonebookUl = document.getElementById('phonebook');

  loadBtn.addEventListener('click', load);
  createBtn.addEventListener('click', create);

  async function create() {
    const data = {
      person: nameInput.value,
      phone: phoneInput.value,
    };

    await fetch(`http://localhost:3030/jsonstore/phonebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    await load();

    nameInput.value = '';
    phoneInput.value = '';
  }

  async function load() {
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
    const data = await response.json();

    phonebookUl.innerHTML = '';
    Object.keys(data).map((el) => {
      const li = document.createElement('li');
      const deleteBtn = document.createElement('button');

      li.textContent = `${data[el].person}: ${data[el].phone}`;
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener(
        'click',
        deletefunc.bind(null, li, data[el]._id)
      );

      li.appendChild(deleteBtn);
      phonebookUl.appendChild(li);
    });
  }

  async function deletefunc(li, id) {
    await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
      method: 'DELETE',
    });

    li.remove();
  }
}

attachEvents();
