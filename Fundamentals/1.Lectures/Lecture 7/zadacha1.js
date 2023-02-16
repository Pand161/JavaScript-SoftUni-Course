function wordsTracker(arr) {
  let num = arr[0].split(' ').length;
  let obj = {};

  for (let i = 0; i < num; i++) {
    let name = arr[0].split(' ')[i];
    obj[name] = 0;

    for (let j = 1; j < arr.length; j++) {
      if (name == arr[j]) {
        obj[name] += 1;
      }
    }
  }
  let entries = Object.entries(obj);
  entries.sort(([_, valueA], [__, valueB]) => valueB - valueA);

  for (const [name, value] of entries) {
    console.log(`${name} - ${value}`);
  }
}

wordsTracker([
  'this sentence',

  'In',
  'this',
  'sentence',
  'you',
  'have',

  'to',
  'count',
  'the',
  'occurrences',
  'of',

  'the',
  'words',
  'this',
  'and',
  'sentence',

  'because',
  'this',
  'is',
  'your',
  'task',
]);

wordsTracker([
  'is the',

  'first',
  'sentence',
  'Here',
  'is',

  'another',
  'the',
  'And',
  'finally',
  'the',

  'the',
  'sentence',
]);
