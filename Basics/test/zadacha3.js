function solution(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let sezon = input[2];
  let days = Number(input[3]);

  switch (destination) {
    case `Dubai`:
      if (sezon == `Summer`) {
        let price = days * 40000;
        price *= 0.7;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      } else {
        let price = days * 45000;
        price *= 0.7;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      }
      break;
    case `Sofia`:
      if (sezon == `Summer`) {
        let price = days * 12500;
        price *= 1.25;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      } else {
        let price = days * 17000;
        price *= 1.25;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      }
      break;
    case `London`:
      if (sezon == `Summer`) {
        let price = days * 20250;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      } else {
        let price = days * 24000;
        if (budget >= price) {
          console.log(
            `The budget for the movie is enough! We have ${(
              budget - price
            ).toFixed(2)} leva left!`
          );
        } else {
          console.log(
            `The director needs ${(price - budget).toFixed(2)} leva more!`
          );
        }
      }
      break;
    default:
      console.log(`Pesho`);
  }
}
solution([200000, 'London', 'Summer', 7]);
