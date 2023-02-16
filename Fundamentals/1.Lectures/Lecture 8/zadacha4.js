function substring(word, str) {
  let word1 = word.toLowerCase();
  let arr = str.toLowerCase().split(' ');
  if (arr.includes(word1)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

substring(
  'javascript',

  'JavaScript is the best programming language'
);

substring(
  'python',

  'JavaScript is the best programming language'
);
