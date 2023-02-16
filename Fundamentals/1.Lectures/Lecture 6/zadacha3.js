function storeProvision(arr1, arr2) {
  let storeProducts = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let value = Number(arr1[i + 1]);
    storeProducts[arr1[i]] = value;
  }

  for (let i = 0; i < arr2.length; i += 2) {
    const currentItem = arr2[i];
    if (!storeProducts.hasOwnProperty(currentItem)) {
      storeProducts[currentItem] = 0;
    }
    storeProducts[currentItem] += Number(arr2[i + 1]);
  }

  for (const key in storeProducts) {
    console.log(`${key} -> ${storeProducts[key]}`);
  }
}

storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);

storeProvision(
  ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
  ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);

// const has = [
//   'Chips',
//   '5',
//   'CocaCola',
//   '9',
//   'Bananas',
//   '14',
//   'Pasta',
//   '4',
//   'Beer',
//   '2',
// ];
// const add = [
//   'Flour',
//   '44',
//   'Oil',
//   '12',
//   'Pasta',
//   '7',
//   'Bananas',
//   '70',
//   'Bananas',
//   '30',
// ];
// const both = has.concat(add);

// const obj = {};

// for (let i = 0; i < both.length; i += 2) {
//   const element = both[i];
//   const quantity = Number(both[i + 1]);

//   if (!obj.hasOwnProperty(element)) {
//     obj[element] = 0;
//   }

//   obj[element] += quantity;
// }

// console.log(obj);
