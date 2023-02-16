function solve(input) {
  let numbers = 0;
  let subtractedNumbers = 0;

  for (let i = 0; i < input.length; i++) {
    numbers += input[i];
    if (input[i] % 2 == 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
  }

  for (let i = 0; i < input.length; i++) {
    subtractedNumbers += input[i];
  }
  console.log(`[ ${input.join(', ')} ]`);
  console.log(numbers);
  console.log(subtractedNumbers);
}

let input = [-5, 11, 3, 0, 2];

solve(input);
