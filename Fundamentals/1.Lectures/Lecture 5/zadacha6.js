function bombNumbers(numbers, bomb) {
  let bombNumber = bomb.shift();
  let power = bomb.pop();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === bombNumber) {
      if (i - power < 0) {
        let start = (i - power) * -1;
        numbers.splice(0, power + 1 + power - i);
        i = -1;
      } else {
        numbers.splice(i - power, power * 2 + 1);
        i = -1;
      }
    }
  }

  const sum = numbers.reduce((acc, x) => acc + x, 0);
  // console.log('NEW ARRAY -------------');
  // console.log(numbers.join(' '));
  console.log(sum);
}

// bombNumbers(
//   [
//     1, 1, 2, 1, 1, 1,

//     2, 1, 1, 1,
//   ],

//   [2, 1]
// );

// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);

// bombNumbers(
//   [1, 7, 7, 1, 2, 3],

//   [7, 1]
// );

bombNumbers(
  [
    1, 2, 2, 4, 2, 2,

    2, 9,
  ],

  [4, 2]
);
bombNumbers([2, 3, 3, 2, 5, 0, 0, 0], [2, 2]);
bombNumbers([1, 2, 1, 1, 1], [2, 2]);
