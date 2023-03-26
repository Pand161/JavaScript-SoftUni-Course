document.getElementById('user').remove();
document.getElementById('login').classList.add('active');
document.getElementById('home').classList.remove('active');

const url = 'http://localhost:3030/users/login';
const form = document.querySelector('form');

form.addEventListener('submit', loginUser);

async function loginUser(event) {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(event.target));

  if (Object.values(userData).some((x) => x == '')) {
    alert('All fields must be filled');
    return;
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(url, options);

    if (response.ok == false) {
      const error = await response.json();
      throw error;
    }

    const data = await response.json();

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('_id', data._id);
  } catch (err) {
    alert(err.message);
    return;
  }

  location.href = 'index.html';
}
