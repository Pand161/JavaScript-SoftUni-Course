function stringManipulator(arr) {
  let str = arr.shift();
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'End') {
      break;
    }

    let info = arr[i].split(' ');
    const command = info[0];

    if (command == 'Translate') {
      let char = info[1];
      let replacement = info[2];

      for (let j = 0; j < str.length; j++) {
        str = str.replace(char, replacement);
      }
      console.log(str);
    } else if (command == 'Includes') {
      let substring = info[1];
      if (str.includes(substring)) {
        console.log('True');
      } else {
        console.log('False');
      }
    } else if (command == 'Start') {
      let substring = info[1];
      let firstLetters = '';

      for (let j = 0; j < substring.length; j++) {
        firstLetters += str[j];
      }

      if (firstLetters == substring) {
        console.log('True');
      } else {
        console.log('False');
      }
    } else if (command == 'Lowercase') {
      str = str.toLowerCase();
      console.log(str);
    } else if (command == 'FindIndex') {
      let char = info[1];

      for (let j = str.length - 1; j >= 0; j--) {
        if (str[j] == char) {
          console.log(j);
          break;
        }
      }
    } else {
      let startIndex = Number(info[1]);
      let count = Number(info[2]);

      str = str.slice(0, startIndex) + str.slice(startIndex + count);
      console.log(str);
    }
  }
}

stringManipulator([
  '*S0ftUni is the B3St Plac3**',
  'Translate 2 o',
  'Includes best',
  'Start the',
  'Lowercase',
  'FindIndex p',
  'Remove 2 7',
  'End',
]);

stringManipulator([
  '//Thi5 I5 MY 5trING!//',
  'Translate 5 s',
  'Includes string',
  'Start //This',
  'Lowercase',
  'FindIndex i',
  'Remove 0 10',
  'End',
]);
