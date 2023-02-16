function storeCatalogue(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let [product, price] = arr[i].split(' : ');
    price = Number(price);

    if (!obj.hasOwnProperty(product[0])) {
      obj[product[0]] = {};
    }

    obj[product[0]][product] = price;
  }

  let arr1 = Object.entries(obj);
  arr1.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i][0]);

    let arr2 = Object.entries(arr1[i][1]);
    arr2.sort((a, b) => a[0].localeCompare(b[0]));

    for (let j = 0; j < arr2.length; j++) {
      console.log(`  ${arr2[j][0]}: ${arr2[j][1]}`);
    }
  }
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
