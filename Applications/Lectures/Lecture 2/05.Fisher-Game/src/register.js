document.getElementById('user').remove();
document.getElementById('register').classList.add('active');
document.getElementById('home').classList.remove('active');

const form = document.getElementById('register-view');
const url = 'http://localhost:3030/users/register';

form.addEventListener('submit', registerUser);

async function registerUser(event) {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(event.target));

  if (userData.email == '' || userData.password == '') {
    alert('All fields must be filled!');
    return;
  }

  if (userData.password != userData.rePass) {
    alert('Passwords must match!');
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
    localStorage.setItem('email', data.email);
    localStorage.setItem('_id', data._id);
  } catch (err) {
    alert(err.message);
    return;
  }

  location.href = 'index.html';
}
