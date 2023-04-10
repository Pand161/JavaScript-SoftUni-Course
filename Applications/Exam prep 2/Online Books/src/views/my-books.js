import { myBooksTemplate } from '../templates/my-books-template.js';
import { getMyBooks } from '../api/api-requests.js';

export async function myBooksPage(ctx) {
  if (!ctx.isAuthenticated) {
    ctx.page.redirect('/');
  }

  const elements = await getMyBooks(ctx.user.id);
  console.log(elements);
  ctx.render(myBooksTemplate(elements));
}
