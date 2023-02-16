function solution(base, increment) {
  let neededStone = 0;
  let neededLapis = 0;
  let neededMarble = 0;
  let steps = 1;

  for (let i = base; i > 2; i -= 2) {
    const total = i * i * increment;
    const marble = (i * 4 - 4) * increment;
    const stone = total - marble;
    neededStone += stone;

    if (steps % 5 == 0 && steps != 0) {
      neededLapis += marble;
    } else {
      neededMarble += marble;
    }

    steps++;
  }

  const neededGold = base % 2 == 0 ? increment * 4 : increment;
  const pyramidHeight = steps * increment;

  console.log(`Stone required: ${Math.ceil(neededStone)}`);
  console.log(`Marble required: ${Math.ceil(neededMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(neededLapis)}`);
  console.log(`Gold required: ${Math.ceil(neededGold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

solution(11, 1);
solution(11, 0.75);
solution(12, 1);
solution(23, 0.5);
