function race(arr) {
  let arr1 = arr.shift().split(', ');
  const regExpNames = /[A-Za-z]/gm;
  const regExpNumbers = /\d/gm;
  const obj = {};
  let sortedListOfRacers = [];

  for (const name of arr1) {
    obj[name] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'end of race') {
      break;
    }

    let name = '';
    let sum = 0;

    const arrOfChars = arr[i].match(regExpNames);
    for (const char of arrOfChars) {
      name += char;
    }

    const arrOfNumbers = arr[i].match(regExpNumbers);
    for (const number of arrOfNumbers) {
      sum += Number(number);
    }

    if (obj.hasOwnProperty(name)) {
      obj[name] += sum;
    }
  }

  sortedListOfRacers = Object.entries(obj).sort(
    ([name1, value1], [name2, value2]) => value2 - value1
  );
  console.log(`1st place: ${sortedListOfRacers[0][0]}`);
  console.log(`2nd place: ${sortedListOfRacers[1][0]}`);
  console.log(`3rd place: ${sortedListOfRacers[2][0]}`);
}

race([
  'George, Peter, Bill, Tom',

  'G4e@55or%6g6!68e!!@ ',

  'R1@!3a$y4456@',

  'B5@i@#123ll',

  'G@e54o$r6ge#',

  '7P%et^#e5346r',

  'T$o553m&6',

  'end of race',
]);

race([
  'Ronald, Bill, Tom, Timmy, Maggie, Michonne',

  'Mi*&^%$ch123o!#$%#nne787) ',

  '%$$B(*&&)i89ll)*&) ',

  'R**(on%^&ald992) ',

  'T(*^^%immy77) ',

  'Ma10**$#g0g0g0i0e',

  'end of race',
]);
