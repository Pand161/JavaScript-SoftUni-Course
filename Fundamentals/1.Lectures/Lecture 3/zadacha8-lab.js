function solve(input) {
  for (let i = input.length - 1; i > 0; i--) {
    let condensed = [];
    for (let j = 0; j < input.length - 1; j++) {
      condensed[j] = input[j] + input[j + 1];
    }
    for (let j = 0; j < condensed.length; j++) {
      input[j] = condensed[j];
    }
  }
  console.log(input[0]);
}

let numbers = [5, 0, 4, 1, 2];
solve(numbers);
