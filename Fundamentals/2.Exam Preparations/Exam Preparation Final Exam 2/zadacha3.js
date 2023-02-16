function plantDiscovery(arr) {
  let plantsObj = {};
  let n = Number(arr.shift());

  for (let i = 0; i < n; i++) {
    let info = arr[i].split('<->');
    let plantName = info[0];
    let plantRarity = Number(info[1]);

    plantsObj[plantName] = { rarity: plantRarity, rating: [] };
  }

  for (let i = n; i < arr.length; i++) {
    if (arr[i] == 'Exhibition') {
      break;
    }

    let info = arr[i].split(': ');
    const command = info[0];
    let [plantName, plantRating] = info[1].split(' - ');

    if (!plantsObj.hasOwnProperty(plantName)) {
      console.log('error');
      continue;
    }

    if (command == 'Rate') {
      plantsObj[plantName].rating.push(Number(plantRating));
    } else if (command == 'Update') {
      plantsObj[plantName].rarity = Number(plantRating);
    } else {
      plantsObj[plantName].rating.splice(0, plantsObj[plantName].rating.length);
    }
  }

  console.log('Plants for the exhibition:');

  for (const plant in plantsObj) {
    let ratingSum = 0;
    if (plantsObj[plant].rating.length > 0) {
      ratingSum =
        plantsObj[plant].rating.reduce((acc, x) => acc + x, 0) /
        plantsObj[plant].rating.length;
    }
    console.log(
      `- ${plant}; Rarity: ${
        plantsObj[plant].rarity
      }; Rating: ${ratingSum.toFixed(2)}`
    );
  }
}

plantDiscovery([
  '3',

  'Arnoldii<->4',

  'Woodii<->7',

  'Welwitschia<->2',

  'Rate: Woodii - 10',

  'Rate: Welwitschia - 7',

  'Rate: Arnoldii - 3',

  'Rate: Woodii - 5',

  'Update: Woodii - 5',

  'Reset: Arnoldii',

  'Exhibition',
]);

plantDiscovery([
  '2',

  'Candelabra<->10',

  'Oahu<->10',

  'Rate: Oahu - 7',

  'Rate: Candelabra - 6',

  'Exhibition',
]);
