function partyTime(arr) {
  let line = false;
  let list = [];
  let guests = {};
  let vip = [];

  for (const guest of arr) {
    if (line == true) {
      if (guests.hasOwnProperty(guest)) {
        guests[guest]++;
      } else {
        guests[guest] = 0;
      }
    }

    if (guest != 'PARTY' && line == false) {
      list.push(guest);
    } else {
      line = true;
    }
  }

  for (let i = 0; i < list.length; i++) {
    let guest = list[i];
    if (guests.hasOwnProperty(guest)) {
      list.splice(i, 1);
      if (guests[guest] > 0) {
        guests[guest]--;
      } else {
        delete guests[guest];
      }
      i--;
    }
  }

  console.log(list.length);

  for (const guest of list) {
    if (!isNaN(guest[0])) {
      console.log(guest);
    }
  }

  for (const guest of list) {
    if (isNaN(guest[0])) {
      console.log(guest);
    }
  }
}

partyTime([
  '7namename',
  '9NoBUajQ',
  '7namename',
  'Ce8vwPmE',
  'SVQXQCbc',
  '7namename',
  'tSzE5t0p',
  'PARTY',
  '7namename',
  '9NoBUajQ',
  'Ce8vwPmE',
  '7namename',
  'SVQXQCbc',
]);

partyTime([
  '7IK9Yo0h',

  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
]);

partyTime([
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
]);
