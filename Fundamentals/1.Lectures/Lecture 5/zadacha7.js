function searchForNumber(arr, numbers) {
  let num1 = numbers.shift();
  let num2 = numbers.shift();
  let num3 = numbers.shift();
  let collection = [];
  let counter = 0;
  for (let i = 0; i < num1; i++) {
    collection.push(arr.shift());
    if (i < num2) {
      collection.shift();
    }
  }
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === num3) {
      counter++;
    }
  }

  console.log(`Number ${num3} occurs ${counter} times.`);
}

searchForNumber(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);
