function commonDivisor(a, b) {
  let divisor = 0;
  for (let i = 0; i <= a; i++) {
    if (a % i == 0 && b % i == 0) {
      divisor = i;
    }
  }
  console.log(divisor);
}

commonDivisor(2154, 458);
