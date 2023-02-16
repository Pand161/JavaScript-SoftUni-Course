function solution(input) {
  let degrees = Number(input[0]);
  let time = input[1];
  let outfit = '';
  let shoes = '';

  switch (time) {
    case 'Morning':
      if (10 <= degrees && degrees <= 18) {
        outfit = 'Sweatshirt';
        shoes = 'Sneakers';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (18 < degrees && degrees <= 24) {
        outfit = 'Shirt';
        shoes = 'Moccasins';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (25 <= degrees) {
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    case 'Afternoon':
      if (10 <= degrees && degrees <= 18) {
        outfit = 'Shirt';
        shoes = 'Moccasins';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (18 < degrees && degrees <= 24) {
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (25 <= degrees) {
        outfit = 'Swim Suit';
        shoes = 'Barefoot';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    case 'Evening':
      if (10 <= degrees) {
        outfit = 'Shirt';
        shoes = 'Moccasins';
        console.log(
          `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    default:
      console.log('Pesho');
  }
}
solution(['28', 'Morning']);
