function solution(group, type, day) {
  let price;

  switch (type) {
    case 'Students':
      if (day == 'Friday') {
        price = 8.45 * group;
      } else if (day == 'Saturday') {
        price = 9.8 * group;
      } else {
        price = 10.46 * group;
      }

      if (group >= 30) {
        price *= 0.85;
      }

      break;

    case 'Business':
      if (group >= 100) {
        group -= 10;
      }

      if (day == 'Friday') {
        price = 10.9 * group;
      } else if (day == 'Saturday') {
        price = 15.6 * group;
      } else {
        price = 16 * group;
      }

      break;

    case 'Regular':
      if (day == 'Friday') {
        price = 15 * group;
      } else if (day == 'Saturday') {
        price = 20 * group;
      } else {
        price = 22.5 * group;
      }

      if (group >= 10 && group <= 20) {
        price *= 0.95;
      }

      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
