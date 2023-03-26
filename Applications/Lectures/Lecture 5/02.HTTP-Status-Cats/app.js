import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const allCats = document.getElementById('allCats');

render(customTemplate(cats), allCats);

function onClick(e) {
  e.preventDefault();
  const currentCat = e.target.parentNode;
  const btn = currentCat.querySelector('button');

  if (btn.textContent.includes('Show')) {
    currentCat.querySelector('div').style.display = 'block';
    btn.textContent = 'Hide status code';
  } else {
    currentCat.querySelector('div').style.display = 'none';
    btn.textContent = 'Show status code';
  }
}

function customTemplate(cats) {
  return html`
    <ul>
      ${cats.map(
        (e) => html`
          <li>
            <img
              src="./images/${e.imageLocation}.jpg"
              width="250"
              height="250"
              alt="Card image cap"
            />
            <div class="info">
              <button class="showBtn" @click="${onClick}">
                Show status code
              </button>
              <div class="status" style="display: none" id=${e.id}>
                <h4>Status Code: ${e.statusCode}</h4>
                <p>${e.statusMessage}</p>
              </div>
            </div>
          </li>
        `
      )}
    </ul>
  `;
}
