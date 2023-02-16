function aboveAverage(str) {
  let average = 0;
  let numbers = str.split(' ');
  let result = [];
  length = numbers.length;

  for (let i = 0; i < length; i++) {
    average += Number(numbers[i]);
  }
  average /= length;

  for (let i = 0; i < length; i++) {
    if (numbers[i] > average) {
      result.push(numbers[i]);
    }
  }

  result.sort((a, b) => b - a);

  if (result.length > 0 && result.length < 6) {
    console.log(result.join(' '));
  } else if (result.length > 0) {
    let answer = [];

    for (let i = 0; i < 5; i++) {
      answer.push(result[i]);
    }

    console.log(answer.join(' '));
  } else {
    console.log('No');
  }
}

aboveAverage('10 20 30 40 50');

aboveAverage('5 2 3 4 -10 30 40 50 20 50 60 60 51');

aboveAverage('1');

aboveAverage('-1 -2 -3 -4 -5 -6');
