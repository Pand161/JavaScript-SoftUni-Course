function autoEngineeringCompany(arr) {
  let carObj = {};

  arr.forEach((el) => {
    [brand, model, number] = el.split(' | ');
    number = Number(number);
    model = '###' + model;

    if (!carObj.hasOwnProperty(brand)) {
      carObj[brand] = [];
    }

    if (!carObj[brand].hasOwnProperty(model)) {
      carObj[brand][model] = 0;
    }

    carObj[brand][model] += number;
  });

  for (const brand in carObj) {
    console.log(brand);

    for (const el in carObj[brand]) {
      console.log(`${el} -> ${carObj[brand][el]}`);
    }
  }
}

autoEngineeringCompany([
  'Audi | Q7 | 1000',

  'Audi | Q6 | 100',

  'Audi | Q7 | 1000',

  'BMW | X5 | 1000',

  'BMW | X6 | 100',

  'Citroen | C4 | 123',

  'Volga | GAZ-24 | 1000000',

  'Lada | Niva | 1000000',

  'Lada | Jigula | 1000000',

  'Citroen | C4 | 22',

  'Citroen | C5 | 10',
]);
