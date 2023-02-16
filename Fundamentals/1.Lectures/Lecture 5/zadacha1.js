function train(arr) {
  let wagons = arr.shift().split(' ').map(Number);
  let limit = Number(arr.shift());

  arr.forEach((x) => {
    if (x.includes('Add')) {
      let element = x.split(' ').pop();
      wagons.push(Number(element));
    }
    let element = Number(x);
    for (let i = 0; i < wagons.length; i++) {
      if (wagons[i] + element <= limit) {
        wagons[i] += element;
        break;
      }
    }
  });

  console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
