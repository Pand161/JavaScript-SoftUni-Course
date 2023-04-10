import { searchTemplate } from '../templates/search-template.js';
import { getDashboard, filterFruits } from '../api/fruits.js';

export function searchPage(ctx) {
  ctx.render(searchTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const searchInput = new FormData(e.target).get('search');

    if (searchInput == '') {
      return alert('fill the search field');
    }

    const elements = await filterFruits(searchInput);

    ctx.render(searchTemplate(onSubmit, elements));
  }
}
