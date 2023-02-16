function computerStore(arr) {
  let typeOfCustomer = arr.pop();
  let length = arr.length;
  let total = 0;

  for (let i = 0; i < length; i++) {
    if (Number(arr[i]) > 0) {
      total += Number(arr[i]);
    } else {
      console.log('Invalid price!');
    }
  }

  let priceWithoutTax = total;
  let tax = total * 0.2;
  total += tax;

  if (typeOfCustomer.includes('special')) {
    total *= 0.9;
  }

  if (total == 0) {
    console.log('Invalid order!');
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
  }
}

computerStore([
  '1023',

  '15',

  '-20',

  '-5.50',

  '450',

  '20',

  '17.66',

  '19.30',

  'regular',
]);

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
