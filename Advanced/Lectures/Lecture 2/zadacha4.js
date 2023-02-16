function rotateArr(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let result = arr.pop();
    arr.unshift(result);
  }

  console.log(arr.join(' '));
}

rotateArr(
  ['1', '2', '3', '4'],

  2
);
