function cardGame(arr) {
  const length = arr.length;
  const players = {};
  const firstLetter = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const secondLetter = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };

  for (let i = 0; i < length; i++) {
    let [name, cards] = arr[i].split(': ');
    let currentCard = cards.split(', ');
    if (!players.hasOwnProperty(name)) {
      players[name] = { drawnCards: [], sum: 0 };
    }

    for (let j = 0; j < currentCard.length; j++) {
      if (!players[name].drawnCards.includes(currentCard[j])) {
        players[name].drawnCards.push(currentCard[j]);
      } else {
        continue;
      }

      let first = currentCard[j].slice(0, currentCard[j].length - 1);
      let second = currentCard[j][currentCard[j].length - 1];

      if (firstLetter.hasOwnProperty(first)) {
        first = firstLetter[first];
      }

      if (secondLetter.hasOwnProperty(second)) {
        second = secondLetter[second];
      }

      players[name].sum += Number(first) * Number(second);
    }
  }

  for (const name in players) {
    console.log(`${name}: ${players[name].sum}`);
  }
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',

  'Tomas: 3H, 10S, JC, KD, 5S, 10S',

  'Andrea: QH, QC, QS, QD',

  'Tomas: 6H, 7S, KC, KD, 5S, 10C',

  'Andrea: QH, QC, JS, JD, JC',

  'Peter: JD, JD, JD, JD, JD, JD',
]);

cardGame([
  'John: 2C, 4H, 9H, AS, QS',

  'Slav: 3H, 10S, JC, KD, 5S, 10S',

  'Alex: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'Slav: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'Alex: 6H, 7S, KC, KD, 5S, 10C',

  'Thomas: QH, QC, JS, JD, JC',

  'John: JD, JD, JD, JD',
]);
