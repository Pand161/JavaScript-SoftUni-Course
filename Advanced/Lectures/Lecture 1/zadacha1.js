function solve(fruit, grams, pricePerKilo) {
  console.log(
    `I need $${((grams * pricePerKilo) / 1000).toFixed(2)} to buy ${(
      grams / 1000
    ).toFixed(2)} kilograms ${fruit}.`
  );
}

solve('orange', 2500, 1.8);
