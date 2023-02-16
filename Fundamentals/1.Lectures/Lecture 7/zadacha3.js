function piccolo(arr) {
  let obj = {};

  for (const ticket of arr) {
    const [command, num] = ticket.split(', ');

    if (command.includes('IN')) {
      obj[num] = 0;
    } else {
      delete obj[num];
    }
  }

  let tickets = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (const ticket of tickets) {
    console.log(ticket);
  }
}

piccolo([
  'IN, CA2844AA',

  'IN, CA1234TA',

  'OUT, CA2844AA',

  'IN, CA9999TT',

  'IN, CA2866HI',

  'OUT, CA1234TA',

  'IN, CA2844AA',

  'OUT, CA2866HI',

  'IN, CA9876HH',

  'IN, CA2822UU',
]);
