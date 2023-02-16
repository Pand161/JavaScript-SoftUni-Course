function upperCaseSplitter(str) {
  let splittedStr = str.split('');
  let lowerCaseStr = str.toLowerCase();
  let result = splittedStr[0];

  for (let i = 1; i < splittedStr.length; i++) {
    if (splittedStr[i] !== lowerCaseStr[i]) {
      result += ', ';
    }
    result += splittedStr[i];
  }

  console.log(result);
}

upperCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
