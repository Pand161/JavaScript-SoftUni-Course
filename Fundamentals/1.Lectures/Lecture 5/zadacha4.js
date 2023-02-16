function sorting(arr) {
  let sortedArr = [];
  arr.sort((a, b) => b - a);
  for (let i = arr.length / 2; i > 0; i--) {
    sortedArr.push(arr.shift(), arr.pop());
  }
  console.log(sortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
