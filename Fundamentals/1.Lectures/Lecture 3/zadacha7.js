function solve(arr) {
  let counter = 0;
  let maxCounter = 0;
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > maxCounter) {
      arr1 = [];
      maxCounter = counter;
      for (let j = i - counter; j <= i; j++) {
        arr1.push(arr[i]);
      }
    }
  }
  console.log(arr1.join(' '));
}

const arr = [4, 4, 4, 4];
solve(arr);
