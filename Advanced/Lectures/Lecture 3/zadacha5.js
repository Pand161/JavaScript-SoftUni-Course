function lowestPrices(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let [town, product, price] = arr[i].split(' | ');
    price = Number(price);

    if (!obj.hasOwnProperty([product]) || price < obj[product][0]) {
      obj[product] = [price, town];
    }
  }

  for (const prod in obj) {
    console.log(`${prod} -> ${obj[prod][0]} (${obj[prod][1]})`);
  }
}

lowestPrices([
  'Sample Town | Sample Product | 1000',

  'Sample Town | Orange | 2',

  'Sample Town | Peach | 1',

  'Sofia | Orange | 3',

  'Sofia | Peach | 2',

  'New York | Sample Product | 1000.1',

  'New York | Burger | 10',
]);
