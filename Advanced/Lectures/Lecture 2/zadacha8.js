function sortingBy2Criteria(arr) {
  arr.sort((a, b) => {
    if (a.length == b.length) {
      return a.localeCompare(b);
    } else {
      return a.length - b.length;
    }
  });

  for (const el of arr) {
    console.log(el);
  }
}

sortingBy2Criteria(['alpha', 'beta', 'gamma']);
sortingBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
