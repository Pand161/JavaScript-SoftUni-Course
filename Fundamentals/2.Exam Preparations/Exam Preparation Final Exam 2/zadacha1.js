function activationKeys(arr) {
  let key = arr.shift();
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'Generate') {
      break;
    }

    let info = arr[i].split('>>>');
    const command = info[0];

    if (command == 'Contains') {
      let substring = info[1];

      if (key.includes(substring)) {
        console.log(`${key} contains ${substring}`);
      } else {
        console.log('Substring not found!');
      }
    } else if (command == 'Flip') {
      let startIndex = Number(info[2]);
      let endIndex = Number(info[3]);
      let firstHalf = key.slice(0, startIndex);
      let secondHalf = key.slice(endIndex);

      if (info[1] == 'Upper') {
        key =
          firstHalf +
          key.slice(startIndex, endIndex).toUpperCase() +
          secondHalf;
      } else {
        key =
          firstHalf +
          key.slice(startIndex, endIndex).toLowerCase() +
          secondHalf;
      }
      console.log(key);
    } else {
      let startIndex = Number(info[1]);
      let endIndex = Number(info[2]);
      key = key.slice(0, startIndex) + key.slice(endIndex);
      console.log(key);
    }
  }

  console.log(`Your activation key is: ${key}`);
}

activationKeys([
  'abcdefghijklmnopqrstuvwxyz',

  'Slice>>>2>>>6',

  'Flip>>>Upper>>>3>>>14',

  'Flip>>>Lower>>>5>>>7',

  'Contains>>>def',

  'Contains>>>deF',

  'Generate',
]);
