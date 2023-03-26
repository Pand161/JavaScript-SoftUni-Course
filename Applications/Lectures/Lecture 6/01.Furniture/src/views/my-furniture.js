import { getAll } from '../api/furniture-api.js';
import { getUserData } from '../api/user-data.js';
import { myFurnitureTemplate } from '../templates/furnitures/my-furniture-template.js';

export async function myFurniturePage(ctx) {
  if (!ctx.isAuthenticated) {
    ctx.page.redirect('/');
    return;
  }

  const myItems = [];
  const userData = JSON.parse(getUserData());
  const allItems = await getAll();

  allItems.map((item) => {
    if (item._ownerId == userData.id) {
      myItems.push(item);
    }
  });

  ctx.render(myFurnitureTemplate(myItems));
}
