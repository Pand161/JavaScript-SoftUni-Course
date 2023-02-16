function degustationParty(arr) {
  let guestsObj = {};
  const length = arr.length;
  let unlikedMealsCount = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'Stop') {
      break;
    }

    let info = arr[i].split('-');
    const command = info[0];
    let guest = info[1];
    let meal = info[2];

    if (command == 'Like') {
      if (!guestsObj.hasOwnProperty(guest)) {
        guestsObj[guest] = [];
      }

      if (!guestsObj[guest].includes(meal)) {
        guestsObj[guest].push(meal);
      }
    } else {
      if (!guestsObj.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
        continue;
      }

      if (!guestsObj[guest].includes(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
        continue;
      }

      console.log(`${guest} doesn't like the ${meal}.`);
      for (let j = 0; j < guestsObj[guest].length; j++) {
        if (guestsObj[guest][j] == meal) {
          guestsObj[guest].splice(j, 1);
          unlikedMealsCount++;
        }
      }
    }
  }

  for (const guest in guestsObj) {
    console.log(`${guest}: ${guestsObj[guest].join(', ')}`);
  }
  console.log(`Unliked meals: ${unlikedMealsCount}`);
}

// degustationParty([
//   'Like-Krisi-shrimps',
//   'Like-Krisi-soup',
//   'Like-Penelope-dessert',
//   'Like-Misho-salad',
//   'Stop',
// ]);

degustationParty([
  'Like-Krisi-shrimps',
  'Dislike-Vili-carp',
  'Dislike-Krisi-salad',
  'Stop',
]);

degustationParty(['Like-Katy-fish', 'Dislike-Katy-fish', 'Stop']);
