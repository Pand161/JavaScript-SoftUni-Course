document.getElementById('logout').style.display = 'none';
const form = document.getElementById('addForm');
const loadBtn = document.getElementsByClassName('load')[0];
const catches = document.getElementById('catches');
const url = 'http://localhost:3030/data/catches';

loadBtn.addEventListener('click', loadCatches);

if (localStorage.getItem('email') != null) {
  document.querySelector('.email span').textContent =
    localStorage.getItem('email');

  document.getElementById('guest').style.display = 'none';
  document.getElementById('logout').style.display = 'inline';
  form.querySelector('fieldset button').disabled = false;
}

form.addEventListener('submit', addCatch);
document.getElementById('logout').addEventListener('click', logoutUser);

async function loadCatches() {
  const response = await fetch(url);
  const data = await response.json();

  catches.innerHTML = '';
  console.log(data);
  Object.values(data).map((el) => {
    const div = document.createElement('div');
    div.classList.add('catch');

    const anglerLabel = document.createElement('label');
    const weightLabel = document.createElement('label');
    const speciesLabel = document.createElement('label');
    const locationLabel = document.createElement('label');
    const baitLabel = document.createElement('label');
    const timeLabel = document.createElement('label');

    const anglerInput = document.createElement('input');
    const weightInput = document.createElement('input');
    const speciesInput = document.createElement('input');
    const locationInput = document.createElement('input');
    const baitInput = document.createElement('input');
    const timeInput = document.createElement('input');

    const updateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    anglerLabel.textContent = 'Angler';
    weightLabel.textContent = 'Weight';
    speciesLabel.textContent = 'Species';
    locationLabel.textContent = 'Location';
    baitLabel.textContent = 'Bait';
    timeLabel.textContent = 'Capture Time';

    anglerInput.type = 'text';
    weightInput.type = 'text';
    speciesInput.type = 'text';
    locationInput.type = 'text';
    baitInput.type = 'text';
    timeInput.type = 'text';

    anglerInput.classList.add('angler');
    weightInput.classList.add('weight');
    speciesInput.classList.add('species');
    locationInput.classList.add('location');
    baitInput.classList.add('bait');
    timeInput.classList.add('captureTime');

    anglerInput.value = el.angler;
    weightInput.value = el.weight;
    speciesInput.value = el.species;
    locationInput.value = el.location;
    baitInput.value = el.bait;
    timeInput.value = el.captureTime;

    updateBtn.textContent = 'Update';
    deleteBtn.textContent = 'Delete';

    updateBtn.classList.add('update');
    deleteBtn.classList.add('delete');

    updateBtn.setAttribute('data-id', el._id);
    deleteBtn.setAttribute('data-id', el._id);

    updateBtn.addEventListener('click', updateCatch.bind(null, el._id));
    deleteBtn.addEventListener('click', deleteCatch.bind(null, el._id));

    div.appendChild(anglerLabel);
    div.appendChild(anglerInput);
    div.appendChild(weightLabel);
    div.appendChild(weightInput);
    div.appendChild(speciesLabel);
    div.appendChild(speciesInput);
    div.appendChild(locationLabel);
    div.appendChild(locationInput);
    div.appendChild(baitLabel);
    div.appendChild(baitInput);
    div.appendChild(timeLabel);
    div.appendChild(timeInput);
    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);

    catches.appendChild(div);
  });
}

async function updateCatch(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.getItem('accessToken'),
    },
    body: JSON.stringify(),
  });
}

async function deleteCatch(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headears: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.getItem('accessToken'),
    },
  });
}

async function addCatch(event) {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(event.target));

  if (Object.values(userData).some((x) => x == '')) {
    return;
  }

  userData._id = localStorage.getItem('_id');

  console.log(userData);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headears: {
        'Content-Type': 'application/json',
        'X-Authorization': localStorage.getItem('accessToken'),
      },
      body: JSON.stringify(userData),
    });

    if (response.ok == false) {
      const err = await response.json();
      throw err;
    }
  } catch (err) {
    alert(err);
  }
}

async function logoutUser() {
  const logoutUrl = 'http://localhost:3030/users/logout';

  try {
    const response = await fetch(logoutUrl, {
      method: 'GET',
      headers: {
        'X-Authorization': localStorage.getItem('accessToken'),
      },
    });

    if (response.ok == false) {
      const error = await response.json();
      throw error;
    }
  } catch (err) {
    alert(err.message);
  }

  localStorage.clear();
  document.querySelector('.email span').textContent = 'guest';
  document.getElementById('guest').style.display = 'inline';
  document.getElementById('logout').style.display = 'none';
  form.querySelector('fieldset button').disabled = true;
}
