function solve(arr) {
  const biggestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let isBiggest = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isBiggest = false;
        break;
      }
    }

    if (isBiggest) {
      biggestNumbers.push(arr[i]);
    }
  }

  console.log(biggestNumbers.join(' '));
}
const arr = [41, 41, 34, 20];

solve(arr);
