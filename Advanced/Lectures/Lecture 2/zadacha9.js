function magicMatrices(arr) {
  let expectedSum = 0;
  let sum = 0;
  let length = arr[0].length;
  let length2 = arr.length;

  for (let i = 0; i < length; i++) {
    expectedSum += arr[0][i];
  }

  for (let i = 0; i < length; i++) {
    sum = 0;
    for (let j = 0; j < length2; j++) {
      sum += arr[j][i];
    }
    if (expectedSum != sum) {
      return console.log(false);
    }
  }

  for (let i = 0; i < length2; i++) {
    sum = 0;
    for (let j = 0; j < length; j++) {
      sum += arr[i][j];
    }
    if (expectedSum != sum) {
      return console.log(false);
    }
  }

  console.log(true);
}

magicMatrices([
  [4, 5, 6],

  [6, 5, 4],

  [5, 5, 5],
]);

magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
