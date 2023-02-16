function hashtags(str) {
  const arr = str.split(' ');
  for (const words of arr) {
    if (words[0] == '#' && words.length > 1) {
      let condition = true;
      let word = words.slice(1).toLowerCase();

      for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt() < 97 || word[i].charCodeAt() > 122) {
          condition = false;
          break;
        }
      }
      if (condition) {
        console.log(words.slice(1));
      }
    }
  }
}

hashtags('Nowadays everyone uses # to tag a #special word in #socialMedia    ');
