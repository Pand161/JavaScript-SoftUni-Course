function furniture(arr) {
  let match;
  let boughtFurniture = [];
  let sum = 0;
  const regexp = />>(\w+)<<([0-9||.]+)!(\d+)/gm;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Purchase') {
      break;
    }

    if (arr[i].match(regexp) != null) {
      match = regexp.exec(arr[i]);
      boughtFurniture.push(match[1]);
      sum += Number(match[2]) * Number(match[3]);
    }
  }

  console.log('Bought furniture:');
  for (const el of boughtFurniture) {
    console.log(el);
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

furniture([
  '>>Laptop<<312.2323!3',

  '>>TV<<300.21314!5',

  '>Invalid<<!5',

  '>>TV<<300.21314!20',

  '>>Invalid<!5',

  '>>TV<<30.21314!5',

  '>>Invalid<<!!5',

  'Purchase',
]);
