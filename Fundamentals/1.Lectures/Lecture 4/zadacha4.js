function solve(num) {
  let numToString = num.toString();
  let odd = 0;
  let even = 0;

  for (let i = 0; i < numToString.length; i++) {
    const digit = Number(numToString[i]);
    if (digit % 2 == 0) {
      even += digit;
    } else {
      odd += digit;
    }
  }

  return `Odd sum = ${odd}, Even sum = ${even}`;
}

solve(3495892137259234);
