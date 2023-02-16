function movingTarget(arr) {
  let targets = arr.shift().split(' ');
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let command = arr[i].split(' ');
    let index = Number(command[1]);
    let power = Number(command[2]);

    if (arr[i].includes('End')) {
      break;
    } else if (arr[i].includes('Shoot')) {
      if (index >= 0 && index < targets.length) {
        targets[index] -= power;
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }
      }
    } else if (arr[i].includes('Add')) {
      if (index >= 0 && index < targets.length) {
        targets.splice(index, 0, power);
      } else {
        console.log('Invalid placement!');
      }
    } else if (arr[i].includes('Strike')) {
      if (index >= 0 && index < targets.length) {
        if (index - power >= 0 && index + power < targets.length) {
          targets.splice(index - power, power * 2 + 1);
        } else {
          console.log('Strike missed!');
        }
      } else {
        console.log('Strike missed!');
      }
    }
  }

  console.log(targets.join('|'));
}

movingTarget([
  '52 74 23 44 96 110',

  'Shoot 5 10',

  'Shoot 1 80',

  'Strike 2 1',

  'Add 22 3',

  'End',
]);

movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);
