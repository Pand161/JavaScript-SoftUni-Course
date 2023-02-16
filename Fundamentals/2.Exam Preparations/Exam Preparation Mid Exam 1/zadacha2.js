function groceryList(arr) {
  let list = arr.shift().split('!');
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let item = arr[i].split(' ').pop();

    if (arr[i].includes('Go Shopping!')) {
      console.log(list.join(', '));
      break;
    } else if (arr[i].includes('Urgent')) {
      if (!list.includes(item)) {
        list.unshift(item);
      }
    } else if (arr[i].includes('Unnecessary')) {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list.splice(index, 1);
      }
    } else if (arr[i].includes('Correct')) {
      let oldItem = arr[i].split(' ');
      if (list.includes(oldItem[1])) {
        let index = list.indexOf(oldItem[1]);
        list.splice(index, 1, item);
      }
    } else if (arr[i].includes('Rearrange')) {
      if (list.includes(item)) {
        let index = list.indexOf(item);
        list.push(item);
        list.splice(index, 1);
      }
    }
  }
}

groceryList([
  'Tomatoes!Potatoes!Bread',

  'Unnecessary Milk',

  'Urgent Tomatoes',

  'Go Shopping!',
]);

groceryList([
  'Milk!Pepper!Salt!Water!Banana',

  'Urgent Salt',

  'Unnecessary Grapes',

  'Correct Pepper Onion',
  'Rearrange Grapes',
  'Correct Tomatoes Potatoes',
  'Go Shopping!',
]);
