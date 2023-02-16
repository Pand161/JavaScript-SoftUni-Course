function solution(input) {
  let name = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let sum = rows * columns;
  let premiere = 12.0;
  let normal = 7.5;
  let discount = 5;
  switch (name) {
    case 'Premiere':
      console.log(`${(sum * premiere).toFixed(2)} leva`);
      break;
    case 'Normal':
      console.log(`${(sum * normal).toFixed(2)} leva`);
      break;
    case 'Discount':
      console.log(`${(sum * discount).toFixed(2)} leva`);
      break;
    default:
      console.log('Pesho');
  }
}
solution(['Premiere', '10', '12']);
