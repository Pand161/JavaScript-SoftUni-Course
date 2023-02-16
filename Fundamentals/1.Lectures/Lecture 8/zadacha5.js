function replaceChars(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      newStr += str[i];
    }
  }

  console.log(newStr);
}

replaceChars('aaaaabbbbbcdddeeeedssaa');
replaceChars('qqqwerqwecccwd');
