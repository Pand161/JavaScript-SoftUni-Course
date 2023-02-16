function needForSpeed(arr) {
  const numOfCars = Number(arr.shift());
  const obj = {};

  for (let i = 0; i < numOfCars; i++) {
    let info = arr.shift().split('|');
    let car = info[0];
    let mileage = Number(info[1]);
    let fuel = Number(info[2]);
    obj[car] = { mileage: mileage, fuel: fuel };
  }

  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'Stop') {
      break;
    }

    let info = arr[i].split(' : ');
    const command = info[0];
    let carName = info[1];

    if (command == 'Drive') {
      let distance = Number(info[2]);
      let fuel = Number(info[3]);

      if (obj[carName].fuel >= fuel) {
        obj[carName].mileage += distance;
        obj[carName].fuel -= fuel;

        console.log(
          `${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );

        if (obj[carName].mileage >= 100000) {
          delete obj[carName];
          console.log(`Time to sell the ${carName}!`);
        }
      } else {
        console.log('Not enough fuel to make that ride');
      }
    } else if (command == 'Refuel') {
      let fuel = Number(info[2]);
      obj[carName].fuel += fuel;

      if (obj[carName].fuel > 75) {
        let refueledFuel = fuel - (obj[carName].fuel - 75);
        obj[carName].fuel = 75;
        console.log(`${carName} refueled with ${refueledFuel} liters`);
      } else {
        console.log(`${carName} refueled with ${fuel} liters`);
      }
    } else {
      let kilometers = info[2];
      obj[carName].mileage -= kilometers;

      if (obj[carName].mileage < 10000) {
        obj[carName].mileage = 10000;
      } else {
        console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
      }
    }
  }

  for (const car in obj) {
    console.log(
      `${car} -> Mileage: ${obj[car].mileage} kms, Fuel in the tank: ${obj[car].fuel} lt.`
    );
  }
}

needForSpeed([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop',
]);
