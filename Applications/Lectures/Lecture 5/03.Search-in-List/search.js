import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const townsDiv = document.getElementById('towns');
const result = document.getElementById('result');
const searchBtn = document.querySelector('article button');

searchBtn.addEventListener('click', search);

customTemplate(towns);

function customTemplate(towns) {
  const template = html` <ul>
    ${towns.map((e) => html` <li>${e}</li> `)}
  </ul>`;
  render(template, townsDiv);
}

function search(e) {
  e.preventDefault();
  const searchInput = document.getElementById('searchText');
  let matches = 0;

  Array.from(townsDiv.querySelectorAll('ul li')).map((e) => {
    if (e.textContent.includes(searchInput.value)) {
      e.classList.add('active');
      matches++;
    } else {
      e.removeAttribute('class');
    }
  });

  result.textContent = `${matches} matches found`;
}
