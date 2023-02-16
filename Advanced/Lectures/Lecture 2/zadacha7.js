function sortingArray(arr) {
  const length = arr.length / 2;
  let arr2 = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    arr2.push(arr[i]);
    arr2.push(arr[arr.length - 1 - i]);
  }

  if (arr.length % 2 !== 0) {
    arr2.pop();
  }

  return arr2;
}

sortingArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 32]);
