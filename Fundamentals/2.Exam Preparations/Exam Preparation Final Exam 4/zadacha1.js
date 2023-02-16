function secretChat(arr) {
  let str = arr.shift();
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'Reveal') {
      break;
    }

    let info = arr[i].split(':|:');
    const command = info[0];

    if (command == 'InsertSpace') {
      let index = Number(info[1]);
      str = str.slice(0, index) + ' ' + str.slice(index);
      console.log(str);
    } else if (command == 'Reverse') {
      let substring = info[1];
      let reverse = '';

      if (str.includes(substring)) {
        for (let j = substring.length - 1; j >= 0; j--) {
          reverse += substring[j];
        }
        str = str.replace(substring, '') + reverse;
        console.log(str);
      } else {
        console.log('error');
      }
    } else {
      let substring = info[1];
      let replacement = info[2];
      const strlength = str.length;

      for (let j = 0; j < strlength; j++) {
        str = str.replace(substring, replacement);
      }
      console.log(str);
    }
  }

  console.log(`You have a new text message: ${str}`);
}

secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
