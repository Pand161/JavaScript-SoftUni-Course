function taxCalculator(arr) {
  let arr2 = arr[0].split('>>');
  let total = 0;

  for (let i = 0; i < arr2.length; i++) {
    let information = arr2[i].split(' ');
    let type = information.shift();
    let years = Number(information.shift());
    let kilometers = Number(information.shift());
    let tax = 0;

    if (type.includes('family')) {
      tax = 50;
      tax -= years * 5;
      let kilometersTax = Math.floor(kilometers / 3000);
      tax += kilometersTax * 12;
      total += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else if (type.includes('heavyDuty')) {
      tax = 80;
      tax -= years * 8;
      let kilometersTax = Math.floor(kilometers / 9000);
      tax += kilometersTax * 14;
      total += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else if (type.includes('sports')) {
      tax = 100;
      tax -= years * 9;
      let kilometersTax = Math.floor(kilometers / 2000);
      tax += kilometersTax * 18;
      total += tax;
      console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
    } else {
      console.log('Invalid car type.');
    }
  }

  console.log(
    `The National Revenue Agency will collect ${total.toFixed(
      2
    )} euros in taxes.`
  );
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);

taxCalculator([
  'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012',
]);
