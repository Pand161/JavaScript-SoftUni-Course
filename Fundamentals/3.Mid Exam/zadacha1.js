function burgerBus(arr) {
  let days = Number(arr.shift());
  let total = 0;

  for (let i = 1; i <= days; i++) {
    let city = arr.shift();
    let income = Number(arr.shift());
    let expenses = Number(arr.shift());

    if (i % 5 == 0) {
      income *= 0.9;
    } else if (i % 3 == 0) {
      expenses *= 1.5;
    }

    let profit = income - expenses;

    total += profit;

    console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);
}

burgerBus([
  '5',
  'Lille',
  '2226.00',
  '1200.60',
  'Rennes',
  '6320.60',
  '5460.20',
  'Reims',
  '600.20',
  '452.32',
  'Bordeaux',
  '6925.30',
  '2650.40',
  'Montpellier',
  '680.50',
  '290.20',
]);

burgerBus([
  '3',
  'Sofia',
  '895.67',
  '213.50',
  'Plovdiv',
  '2563.20',
  '890.26',
  'Burgas',
  '2360.55',
  '600.00',
]);
