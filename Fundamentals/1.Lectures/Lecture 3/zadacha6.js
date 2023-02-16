function solve(arr) {
  let rightAnswer = false;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += Number(arr[j]);
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += Number(arr[j]);
    }

    if (leftSum == rightSum) {
      rightAnswer = true;
      index = i;
      break;
    }
  }

  if (!rightAnswer) {
    console.log('no');
  } else {
    console.log(index);
  }
}

const arr = [1, 2];
solve(arr);
