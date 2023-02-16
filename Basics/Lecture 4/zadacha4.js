function solution(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermans = Number(input[2]);
  let sum;
  switch (season) {
    case 'Summer':
      sum = 4200;
      if (fishermans <= 6) {
        sum *= 0.9;
      } else if (fishermans >= 7 && fishermans <= 11) {
        sum *= 0.85;
      } else {
        sum *= 0.75;
      }
      if (fishermans % 2 == 0) {
        sum *= 0.95;
      }
      if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
      } else if (budget < sum) {
        console.log(
          `Not enough money! You need ${(sum - budget).toFixed(2)} leva.`
        );
      }
      break;
    case 'Winter':
      sum = 2600;
      if (fishermans <= 6) {
        sum *= 0.9;
      } else if (fishermans >= 7 && fishermans <= 11) {
        sum *= 0.85;
      } else {
        sum *= 0.75;
      }
      if (fishermans % 2 == 0) {
        sum *= 0.95;
      }
      if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
      } else if (budget < sum) {
        console.log(
          `Not enough money! You need ${(sum - budget).toFixed(2)} leva.`
        );
      }
      break;
    case 'Spring':
      sum = 3000;
      if (fishermans <= 6) {
        sum *= 0.9;
      } else if (fishermans >= 7 && fishermans <= 11) {
        sum *= 0.85;
      } else {
        sum *= 0.75;
      }
      if (fishermans % 2 == 0) {
        sum *= 0.95;
      }
      if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
      } else if (budget < sum) {
        console.log(
          `Not enough money! You need ${(sum - budget).toFixed(2)} leva.`
        );
      }
      break;
    case 'Autumn':
      sum = 4200;
      if (fishermans <= 6) {
        sum *= 0.9;
      } else if (fishermans >= 7 && fishermans <= 11) {
        sum *= 0.85;
      } else {
        sum *= 0.75;
      }
      if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
      } else if (budget < sum) {
        console.log(
          `Not enough money! You need ${(sum - budget).toFixed(2)} leva.`
        );
      }
      break;
    default:
      console.log('Pesho');
  }
}
solution(['3000', 'Summer', '11']);
