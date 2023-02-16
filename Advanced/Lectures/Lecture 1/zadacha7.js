function cookingByNumbers(
  number,
  command1,
  command2,
  command3,
  command4,
  command5
) {
  number = Number(number);
  let arr = [command1, command2, command3, command4, command5];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'chop') {
      number /= 2;
    } else if (arr[i] == 'dice') {
      number = Math.sqrt(number);
    } else if (arr[i] == 'spice') {
      number += 1;
    } else if (arr[i] == 'bake') {
      number *= 3;
    } else {
      number = number - number * 0.2;
    }
    console.log(number);
  }
}

cookingByNumbers(
  '9',
  'dice',
  'spice',
  'chop',
  'bake',

  'fillet'
);

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
