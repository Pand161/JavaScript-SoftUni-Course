function solution(input) {
  let months = input[0];
  let nights = Number(input[1]);
  let studio;
  let apartment;
  switch (months) {
    case 'May':
    case 'October':
      studio = 50 * nights;
      apartment = 65 * nights;
      if (nights > 7 && nights <= 14) {
        studio *= 0.95;
      } else if (nights > 14) {
        studio *= 0.7;
        apartment *= 0.9;
      }
      console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
      console.log(`Studio: ${studio.toFixed(2)} lv.`);
      break;
    case 'June':
    case 'September':
      studio = 75.2 * nights;
      apartment = 68.7 * nights;
      if (nights > 14) {
        studio *= 0.8;
        apartment *= 0.9;
      }
      console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
      console.log(`Studio: ${studio.toFixed(2)} lv.`);
      break;
    case 'July':
    case 'August':
      studio = 76 * nights;
      apartment = 77 * nights;
      if (nights > 14) {
        apartment *= 0.9;
      }
      console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
      console.log(`Studio: ${studio.toFixed(2)} lv.`);
      break;
    default:
      console.log('Pesho');
  }
}
solution(['August', '20']);
