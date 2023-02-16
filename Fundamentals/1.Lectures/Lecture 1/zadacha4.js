function solution(group, type, day) {
  let price;
  switch (type) {
    case 'Students':
      if (group >= 30) {
        if (day == 'Friday') {
          price = 8.45 * group * 0.85;
          console.log(`Total price: ${price.toFixed(2)}`);
        } else if (day == 'Saturday') {
          price = 9.8 * group * 0.85;
          console.log(`Total price: ${price.toFixed(2)}`);
        } else {
          price = 10.46 * group * 0.85;
          console.log(`Total price: ${price.toFixed(2)}`);
        }
      } else if (day == 'Friday') {
        price = 8.45 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else if (day == 'Saturday') {
        price = 9.8 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else {
        price = 10.46 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      }
      break;
    case 'Business':
      if (group >= 100) {
        group -= 10;
      }
      if (day == 'Friday') {
        price = 10.9 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else if (day == 'Saturday') {
        price = 15.6 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else {
        price = 16 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      }
      break;
    case 'Regular':
      if (group >= 10 && group <= 20) {
        if (day == 'Friday') {
          price = 15 * group * 0.95;
          console.log(`Total price: ${price.toFixed(2)}`);
        } else if (day == 'Saturday') {
          price = 20 * group * 0.95;
          console.log(`Total price: ${price.toFixed(2)}`);
        } else {
          price = 22.5 * group * 0.95;
          console.log(`Total price: ${price.toFixed(2)}`);
        }
      } else if (day == 'Friday') {
        price = 15 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else if (day == 'Saturday') {
        price = 20 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      } else {
        price = 22.5 * group;
        console.log(`Total price: ${price.toFixed(2)}`);
      }
      break;
  }
}
solution(
  40,

  'Regular',

  'Saturday'
);
