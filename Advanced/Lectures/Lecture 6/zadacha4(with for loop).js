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
      for (let i = 0; i < quantity; i++) {
        if (recipe == 'apple') {
          if (obj.carbohydrate >= 1 && obj.flavour >= 2) {
            obj.carbohydrate -= 1;
            obj.flavour -= 2;
          } else if (obj.carbohydrate < 1) {
            return 'Error: not enough carbohydrate in stock';
          } else {
            return 'Error: not enough flavour in stock';
          }
        } else if (recipe == 'lemonade') {
          if (obj.carbohydrate >= 10 && obj.flavour >= 20) {
            obj.carbohydrate -= 10;
            obj.flavour -= 20;
          } else if (obj.carbohydrate < 10) {
            return 'Error: not enough carbohydrate in stock';
          } else {
            return 'Error: not enough flavour in stock';
          }
        } else if (recipe == 'burger') {
          if (obj.carbohydrate >= 5 && obj.fat >= 7 && obj.flavour >= 3) {
            obj.carbohydrate -= 5;
            obj.fat -= 7;
            obj.flavour -= 3;
          } else if (obj.carbohydrate < 5) {
            return 'Error: not enough carbohydrate in stock';
          } else if (obj.fat < 7) {
            return 'Error: not enough fat in stock';
          } else {
            return 'Error: not enough flavour in stock';
          }
        } else if (recipe == 'eggs') {
          if (obj.protein >= 5 && obj.fat >= 1 && obj.flavour >= 1) {
            obj.protein -= 5;
            obj.fat -= 1;
            obj.flavour -= 1;
          } else if (obj.protein < 5) {
            return 'Error: not enough protein in stock';
          } else if (obj.fat < 1) {
            return 'Error: not enough fat in stock';
          } else {
            return 'Error: not enough flavour in stock';
          }
        } else if (recipe == 'turkey') {
          if (
            obj.protein >= 10 &&
            obj.carbohydrate >= 10 &&
            obj.fat >= 10 &&
            obj.flavour >= 10
          ) {
            obj.protein -= 10;
            obj.carbohydrate -= 10;
            obj.fat -= 10;
            obj.flavour -= 10;
          } else if (obj.protein < 10) {
            return 'Error: not enough protein in stock';
          } else if (obj.carbohydrate < 10) {
            return 'Error: not enough carbohydrate in stock';
          } else if (obj.fat < 10) {
            return 'Error: not enough fat in stock';
          } else {
            return 'Error: not enough flavour in stock';
          }
        }
      }
      return 'Success';
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
