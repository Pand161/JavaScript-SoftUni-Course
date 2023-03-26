import { getAllIdeas } from './api/data.js';

const section = document.getElementById('dashboard-holder');

export async function showCatalog(context) {
  context.showSection(section);
  const ideas = await getAllIdeas();

  if (ideas.length == 0) {
    section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
  } else {
    section.replaceChildren(...ideas.map(createIdeaPreview));
  }
}

function createIdeaPreview(idea) {
  const element = document.createElement('div');
  element.classList.add('card', 'overflow-hidden', 'current-card', 'details');
  element.style.width = '20rem';
  element.style.height = '18rem';
  element.innerHTML = `
    <div class="card-body">
    <p class="card-text">${idea.title}</p>
  </div>
  <img
    class="card-image"
    src=${idea.img}
    alt="Card image cap"
  />
  <a class="btn" href="">Details</a>`;

  return element;
}

/*
<div
          class="card overflow-hidden current-card details"
          style="width: 20rem; height: 18rem"
        >
          <div class="card-body">
            <p class="card-text">Dinner Recipe</p>
          </div>
          <img
            class="card-image"
            src="./images/dinner.jpg"
            alt="Card image cap"
          />
          <a class="btn" href="">Details</a>
        </div>
*/
