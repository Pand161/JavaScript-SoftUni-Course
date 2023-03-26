import { html, render } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
const root = document.getElementById('root');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  let towns = formData.get('towns');
  render(templating(towns), root);
}

function templating(data) {
  return html`
    <ul>
      ${data.split(', ').map((e) => html`<li>${e}</li>`)}
    </ul>
  `;
}
