function solve(number) {
  let numberString = number.toString();
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    sum += Number(numberString[i]);
  }

  console.log(sum);
}

solve(543);
