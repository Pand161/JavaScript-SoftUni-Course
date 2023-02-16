function mirrorWords(arr) {
  let str = arr[0];
  let regex = /(@|#)(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1/gm;
  let validPairs = false;
  let info;
  let words = [];
  let count = 0;

  while ((info = regex.exec(str))) {
    validPairs = true;

    let groups = info.groups;
    let { wordOne, wordTwo } = groups;
    let reverseWordTwo = '';

    for (let i = wordTwo.length - 1; i >= 0; i--) {
      reverseWordTwo += wordTwo[i];
    }

    if (wordOne == reverseWordTwo) {
      words.push(`${wordOne} <=> ${wordTwo}`);
    }
    count++;
  }

  if (validPairs == false) {
    console.log('No word pairs found!');
    console.log('No mirror words!');
  }

  if (validPairs == true && words.length > 0) {
    console.log(`${count} word pairs found!`);
    console.log(`The mirror words are:\n${words.join(', ')}`);
  } else if (validPairs == true) {
    console.log(`${count} word pairs found!`);
    console.log('No mirror words!');
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
