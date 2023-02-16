function oddOccurrences(str) {
  str[0] = str[0].toLowerCase();
  let arr = str[0].split(' ');
  let obj = {};

  for (const word of arr) {
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 0;
    }

    obj[word]++;
  }

  const filteredWords = Object.keys(obj).filter((key) => obj[key] % 2 == 1);
  console.log(filteredWords.join(' '));
}

oddOccurrences(['Java C# Php PHP Java PhP 3 C# 3 1 5 C#']);
oddOccurrences(['Cake IS SWEET is Soft CAKE sweet Food']);
