function houseParty(arr) {
  let length = arr.length;
  let name = [];
  let list = [];

  for (let i = 0; i < length; i++) {
    name.push(arr[i].split(' ').shift());

    if (arr[i] == `${name[i]} is going!`) {
      let condition = true;

      for (let j = 0; j < list.length; j++) {
        if (name[i] == list[j]) {
          console.log(`${name[i]} is already in the list!`);
          condition = false;
          break;
        }
      }

      if (condition) {
        list.push(name[i]);
      }
    } else {
      let condition = false;

      for (let j = 0; j < list.length; j++) {
        if (name[i] == list[j]) {
          list.splice(j, 1);
          condition = true;
        }
      }

      if (!condition) {
        console.log(`${name[i]} is not in the list!`);
      }
    }
  }

  console.log(list.join('\n'));
}

houseParty([
  'Allie is going!',

  'George is going!',

  'John is not going!',

  'George is not going!',
]);

houseParty([
  'Tom is going!',

  'Annie is going!',

  'Tom is going!',

  'Garry is going!',

  'Jerry is going!',
]);
