import { html, render } from './node_modules/lit-html/lit-html.js';

const tbody = document.querySelector('tbody');

customTemplating();

document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {
  const input = document.getElementById('searchField');
  const inputValue = input.value.toLowerCase();
  const rows = document.querySelectorAll('tbody tr');

  Array.from(rows).map((el) => {
    const cells = Array.from(el.querySelectorAll('td'));

    if (cells.some((x) => x.textContent.toLowerCase().includes(inputValue))) {
      el.classList.add('select');
    } else {
      el.removeAttribute('class');
    }
  });
}

async function customTemplating() {
  const data = await getData('http://localhost:3030/jsonstore/advanced/table');
  const template = html`
    ${Object.keys(data).map(
      (e) =>
        html`
          <tr>
            <td>${data[e].firstName} ${data[e].lastName}</td>
            <td>${data[e].email}</td>
            <td>${data[e].course}</td>
          </tr>
        `
    )}
  `;

  render(template, tbody);
}

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}
