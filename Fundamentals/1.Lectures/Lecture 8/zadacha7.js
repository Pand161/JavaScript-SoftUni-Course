function reverseAndCut(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  let secondHalf = reversedStr.slice(0, reversedStr.length / 2);
  let firstHalf = reversedStr.slice(reversedStr.length / 2);

  console.log(firstHalf);
  console.log(secondHalf);
}

reverseAndCut('tluciffiDsIsihTgnizamAoSsIsihT');
