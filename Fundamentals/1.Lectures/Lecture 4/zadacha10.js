function factorialDivision(number1, number2) {
  console.log(
    (calculateFactorial(number1) / calculateFactorial(number2)).toFixed(2)
  );

  function calculateFactorial(number) {
    let sum = 1;
    for (let i = number; i > 0; i--) {
      sum *= i;
    }
    return sum;
  }
}

factorialDivision(5, 2);
