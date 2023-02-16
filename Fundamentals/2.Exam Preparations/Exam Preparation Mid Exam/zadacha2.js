function treasureHunt(arr) {
  let chest = arr.shift().split('|');
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i].includes('Yohoho!')) {
      break;
    }

    if (arr[i].includes('Loot')) {
      let items = arr[i].slice(5).split(' ');
      for (let j = 0; j < items.length; j++) {
        if (!chest.includes(items[j])) {
          chest.unshift(items[j]);
        }
      }
    } else if (arr[i].includes('Drop')) {
      let index = Number(arr[i].split(' ').pop());
      if (index > -1 && index < chest.length) {
        let item = chest[index];
        chest.splice(index, 1);
        chest.push(item);
      }
    } else if (arr[i].includes('Steal')) {
      let count = Number(arr[i].split(' ').pop());
      if (count >= chest.length) {
        console.log(chest.join(', '));
        chest.splice(0, chest.length);
      } else {
        let index = chest.length - count;
        let items = chest.splice(index, count);
        console.log(items.join(', '));
      }
    }
  }

  let total = 0;
  for (let i = 0; i < chest.length; i++) {
    total += chest[i].length;
  }

  if (total > 0) {
    console.log(
      `Average treasure gain: ${(total / chest.length).toFixed(
        2
      )} pirate credits.`
    );
  } else {
    console.log('Failed treasure hunt.');
  }
}
treasureHunt([
  'Gold|Silver|Bronze|Medallion|Cup',

  'Loot Wood Gold Coins',

  'Loot Silver Pistol',

  'Drop 3',

  'Steal 3',

  'Yohoho!',
]);

treasureHunt([
  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!',
]);
