function solve(arr) {
  const [size, string, ...directions] = arr;

  const initialIndexes = [];
  for (let i = 0; i < string.length; i++) {
    const ch = string[i];

    if (ch == '-') {
      i++;
      continue;
    }

    if (!isNaN(ch)) {
      initialIndexes.push(Number(ch));
    }
  }

  const ladyBugs = [];
  for (let i = 0; i < size; i++) {
    ladyBugs.push(0);
  }

  for (let i = 0; i < initialIndexes.length; i++) {
    if (initialIndexes[i] < size && initialIndexes[i] >= 0) {
      ladyBugs[initialIndexes[i]] = 1;
    }
  }

  for (let i = 0; i < directions.length; i++) {
    let string2 = directions[i];
    let [ladyBugIndex, direction, flyLength] = string2.split(' ');
    ladyBugIndex = Number(ladyBugIndex);
    flyLength = Number(flyLength);

    if (ladyBugIndex < size && ladyBugIndex >= 0) {
      if (ladyBugs[ladyBugIndex] > 0) {
        ladyBugs[ladyBugIndex] = 0;

        if (direction === 'right') {
          ladyBugIndex += flyLength;
        } else {
          ladyBugIndex -= flyLength;
        }

        if (ladyBugs[ladyBugIndex] == 0) {
          ladyBugs[ladyBugIndex] = 1;
        } else {
          while (
            ladyBugs[ladyBugIndex] == 1 &&
            ladyBugIndex < size &&
            ladyBugIndex >= 0
          ) {
            if (direction === 'right') {
              ladyBugIndex += flyLength;
            } else {
              ladyBugIndex -= flyLength;
            }
          }
          if (ladyBugs[ladyBugIndex] == 0) {
            ladyBugs[ladyBugIndex] = 1;
          }
        }
      }
    }
  }

  console.log(ladyBugs.join(' '));
}

solve([5, '0 -3 5', '3 left 2', '1 left -2']);
