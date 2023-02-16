function juiceFlavors(arr) {
  let quantity = {};
  let bottles = {};

  arr.forEach((el) => {
    [key, value] = el.split(' => ');
    if (!quantity.hasOwnProperty(key)) {
      quantity[key] = 0;
    }

    quantity[key] += Number(value);

    while (quantity[key] >= 1000) {
      if (!bottles.hasOwnProperty(key)) {
        bottles[key] = 0;
      }

      bottles[key]++;
      quantity[key] -= 1000;
    }
  });

  for (const el in bottles) {
    console.log(`${el} => ${bottles[el]}`);
  }
}

juiceFlavors([
  'Kiwi => 234',

  'Pear => 2345',

  'Watermelon => 3456',

  'Kiwi => 4567',

  'Pear => 5678',

  'Watermelon => 6789',
]);
