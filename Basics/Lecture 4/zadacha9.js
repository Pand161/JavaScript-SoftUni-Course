function solution(input) {
  let days = Number(input[0]);
  let room = input[1];
  let comment = input[2];
  let roomCost;
  nights = days - 1;
  switch (room) {
    case 'room for one person':
      roomCost = nights * 18;
      if (comment == 'positive') {
        roomCost *= 1.25;
      } else {
        roomCost *= 0.9;
      }
      console.log(roomCost.toFixed(2));
      break;
    case 'apartment':
      roomCost = nights * 25;
      if (nights < 10) {
        roomCost *= 0.7;
      } else if (nights >= 10 && nights <= 15) {
        roomCost *= 0.65;
      } else if (nights > 15) {
        roomCost *= 0.5;
      }
      if (comment == 'positive') {
        roomCost *= 1.25;
      } else {
        roomCost *= 0.9;
      }
      console.log(roomCost.toFixed(2));
      break;
    case 'president apartment':
      roomCost = nights * 35;
      if (nights < 10) {
        roomCost *= 0.9;
      } else if (nights >= 10 && nights <= 15) {
        roomCost *= 0.85;
      } else {
        roomCost *= 0.8;
      }
      if (comment == 'positive') {
        roomCost *= 1.25;
      } else {
        roomCost *= 0.9;
      }
      console.log(roomCost.toFixed(2));
      break;
    default:
      console.log('Pesho');
  }
}
solution(['12', 'room for one person', 'positive']);
