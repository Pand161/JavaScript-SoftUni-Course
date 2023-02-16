function emojis(arr) {
  let str = arr[0];
  let regex = /(\*\*|::)(?<word>[A-Z][a-z]{2,})\1/gm;
  let numberRegex = /\d/gm;
  let count = 0;
  let coolThreshold = str
    .match(numberRegex)
    .reduce((acc, x) => acc * Number(x), 1);
  let info;

  console.log(`Cool threshold: ${coolThreshold}`);

  let arr2 = [];

  while ((info = regex.exec(str))) {
    count++;
    let { word } = info.groups;
    let num = word.split('').reduce((acc, x) => acc + x.charCodeAt(), 0);
    if (num > coolThreshold) {
      arr2.push(info[0]);
    }
  }
  console.log(`${count} emojis found in the text. The cool ones are:`);
  console.log(arr2.join('\n'));
}

emojis([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
