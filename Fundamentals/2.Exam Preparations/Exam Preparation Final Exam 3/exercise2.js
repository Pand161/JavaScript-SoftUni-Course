function fancyBarcodes(arr) {
  let regex = /@#{1,}(?<word>[A-Z][A-Za-z0-9]{4,})[A-Z]@#{1,}/gm;
  const length = arr.shift();

  for (let i = 0; i < length; i++) {
    let info;
    let product = '';

    if (arr[i].match(regex) !== null) {
      info = regex.exec(arr[i]).groups;

      let word = info.word;
      for (let j = 0; j < word.length; j++) {
        if (!isNaN(word[j])) {
          product += word[j];
        }
      }

      if (product == '') {
        product = '00';
      }

      console.log(`Product group: ${product}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}

// fancyBarcodes([
//   '6',
//   '@###Val1d1teM@###',
//   '@#ValidIteM@#',
//   '##InvaliDiteM##',
//   '@InvalidIteM@',
//   '@#Invalid_IteM@#',
//   '@#ValiditeM@#',
// ]);

fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
