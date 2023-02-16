function solution(arr) {
  let arr2 = [];
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      num = arr[i];
      arr2.push(num);
    }
  }

  return arr2;
}

solution([
  1,

  3,

  8,

  4, 10, 12, 3, 2, 24,
]);
