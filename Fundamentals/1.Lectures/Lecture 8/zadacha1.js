function revealWords(words, str) {
  const word = words.split(', ');
  const char = '*';

  for (const currentWord of word) {
    const unrevealed = char.repeat(currentWord.length);
    str = str.replace(unrevealed, currentWord);
  }

  console.log(str);
}

revealWords(
  'great',

  'softuni is ***** place for learning new programming languages'
);

revealWords(
  'great, learning',

  'softuni is ***** place for ******** new programming language'
);
