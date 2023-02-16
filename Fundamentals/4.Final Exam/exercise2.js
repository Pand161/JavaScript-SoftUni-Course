function messageTranslator(arr) {
  let numOfStrings = Number(arr.shift());
  let regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<word>[A-Za-z]{8,})\]/gm;

  for (let i = 0; i < numOfStrings; i++) {
    if (arr[i].match(regex)) {
      let info = regex.exec(arr[i]);
      let { command, word } = info.groups;
      let numbers = '';

      for (let j = 0; j < word.length; j++) {
        numbers += word[j].charCodeAt() + ' ';
      }

      console.log(`${command}: ${numbers}`);
    } else {
      console.log('The message is invalid');
    }
  }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready']);

messageTranslator([
  '3',
  'go:[outside]',
  '!drive!:YourCarToACarWash',
  '!Watch!:[LordofTheRings]',
]);
