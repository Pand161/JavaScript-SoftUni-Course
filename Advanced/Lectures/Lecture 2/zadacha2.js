function solution(arr, num) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += num) {
    arr2.push(arr[i]);
  }
  return arr2;
}

solution(
  ['5', '20', '31', '4', '20'],

  2
);
