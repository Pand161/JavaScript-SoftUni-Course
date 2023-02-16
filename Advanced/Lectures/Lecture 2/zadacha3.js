function addAndRemoveEl(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
      arr2.push(i + 1);
    } else {
      arr2.pop();
    }
  }

  if (arr2.length < 1) {
    return console.log('Empty');
  }

  console.log(arr2.join('\n'));
}

addAndRemoveEl(['remove', 'remove', 'remove']);

addAndRemoveEl(['add', 'add', 'add', 'add']);

addAndRemoveEl(['add', 'add', 'remove', 'add', 'add']);
