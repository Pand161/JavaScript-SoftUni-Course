function solve(arr1, count) {
  for (let i = 0; i < count; i++) {
    let element1 = arr1[0];

    for (let j = 0; j < arr1.length; j++) {
      let element2 = arr1[j + 1];
      arr1[j] = element2;
    }
    arr1[arr1.length - 1] = element1;
  }

  console.log(arr1.join(' '));
}

let arr1 = [2, 4, 15, 31];

solve([2, 4, 15, 31], 5);
