function solution() {
  let obj = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  return (str) => {
    let info = str.split(' ');
    const command = info[0];
    const quantity = Number(info[2]);

    if (command == 'restock') {
      obj[info[1]] += quantity;
      return 'Success';
    } else if (command == 'prepare') {
      const recipe = info[1];

      if (recipe == 'apple') {
        if (obj.carbohydrate >= 1 * quantity && obj.flavour >= 2 * quantity) {
          obj.carbohydrate -= 1 * quantity;
          obj.flavour -= 2 * quantity;
          return 'Success';
        } else if (obj.carbohydrate < 1 * quantity) {
          return 'Error: not enough carbohydrate in stock';
        } else {
          return 'Error: not enough flavour in stock';
        }
      } else if (recipe == 'lemonade') {
        if (obj.carbohydrate >= 10 * quantity && obj.flavour >= 20 * quantity) {
          obj.carbohydrate -= 10 * quantity;
          obj.flavour -= 20 * quantity;
          return 'Success';
        } else if (obj.carbohydrate < 10 * quantity) {
          return 'Error: not enough carbohydrate in stock';
        } else {
          return 'Error: not enough flavour in stock';
        }
      } else if (recipe == 'burger') {
        if (
          obj.carbohydrate >= 5 * quantity &&
          obj.fat >= 7 * quantity &&
          obj.flavour >= 3 * quantity
        ) {
          obj.carbohydrate -= 5 * quantity;
          obj.fat -= 7 * quantity;
          obj.flavour -= 3 * quantity;
          return 'Success';
        } else if (obj.carbohydrate < 5 * quantity) {
          return 'Error: not enough carbohydrate in stock';
        } else if (obj.fat < 7 * quantity) {
          return 'Error: not enough fat in stock';
        } else {
          return 'Error: not enough flavour in stock';
        }
      } else if (recipe == 'eggs') {
        if (
          obj.protein >= 5 * quantity &&
          obj.fat >= 1 * quantity &&
          obj.flavour >= 1 * quantity
        ) {
          obj.protein -= 5 * quantity;
          obj.fat -= 1 * quantity;
          obj.flavour -= 1 * quantity;
          return 'Success';
        } else if (obj.protein < 5 * quantity) {
          return 'Error: not enough protein in stock';
        } else if (obj.fat < 1 * quantity) {
          return 'Error: not enough fat in stock';
        } else {
          return 'Error: not enough flavour in stock';
        }
      } else if (recipe == 'turkey') {
        if (
          obj.protein >= 10 * quantity &&
          obj.carbohydrate >= 10 * quantity &&
          obj.fat >= 10 * quantity &&
          obj.flavour >= 10 * quantity
        ) {
          obj.protein -= 10 * quantity;
          obj.carbohydrate -= 10 * quantity;
          obj.fat -= 10 * quantity;
          obj.flavour -= 10 * quantity;
          return 'Success';
        } else if (obj.protein < 10 * quantity) {
          return 'Error: not enough protein in stock';
        } else if (obj.carbohydrate < 10 * quantity) {
          return 'Error: not enough carbohydrate in stock';
        } else if (obj.fat < 10 * quantity) {
          return 'Error: not enough fat in stock';
        } else {
          return 'Error: not enough flavour in stock';
        }
      }
    } else if (command == 'report') {
      return Object.entries(obj)
        .map(([microEl, qty]) => `${microEl}=${qty}`)
        .join(' ');
    }
  };
}

let manager = solution();

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
