function solution(input) {
  let name = input[0];
  let amount = Number(input[1]);
  let budget = Number(input[2]);
  let sum;
  switch (name) {
    case 'Roses':
      sum = amount * 5;
      if (amount > 80) {
        sum *= 0.9;
      }
      if (budget >= sum) {
        console.log(
          `Hey, you have a great garden with ${amount} ${name} and ${(
            budget - sum
          ).toFixed(2)} leva left.`
        );
      } else if (budget < sum) {
        console.log(
          `Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`
        );
      }
      break;
    case 'Dahlias':
      sum = amount * 3.8;
      if (amount > 90) {
        sum *= 0.85;
      }
      if (budget >= sum) {
        console.log(
          `Hey, you have a great garden with ${amount} ${name} and ${(
            budget - sum
          ).toFixed(2)} leva left.`
        );
      } else if (budget < sum) {
        console.log(
          `Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`
        );
      }
      break;
    case 'Tulips':
      sum = amount * 2.8;
      if (amount > 80) {
        sum *= 0.85;
      }
      if (budget >= sum) {
        console.log(
          `Hey, you have a great garden with ${amount} ${name} and ${(
            budget - sum
          ).toFixed(2)} leva left.`
        );
      } else if (budget < sum) {
        console.log(
          `Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`
        );
      }
      break;
    case 'Narcissus':
      sum = amount * 3;
      if (amount < 120) {
        sum *= 1.15;
      }
      if (budget >= sum) {
        console.log(
          `Hey, you have a great garden with ${amount} ${name} and ${(
            budget - sum
          ).toFixed(2)} leva left.`
        );
      } else if (budget < sum) {
        console.log(
          `Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`
        );
      }
      break;
    case 'Gladiolus':
      sum = amount * 2.5;
      if (amount < 80) {
        sum *= 1.2;
      }
      if (budget >= sum) {
        console.log(
          `Hey, you have a great garden with ${amount} ${name} and ${(
            budget - sum
          ).toFixed(2)} leva left.`
        );
      } else if (budget < sum) {
        console.log(
          `Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`
        );
      }
      break;
    default:
      console.log('Pesho');
  }
}
solution(['Roses', '55', '250']);
solution(['Tulips', '88', '260']);
