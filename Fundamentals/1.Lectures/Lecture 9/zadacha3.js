function barIncome(arr) {
  const regex =
    /%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<times>\d+)\|.*?(?<cost>[\d+|.]+)\$/gm;
  let sum = 0;
  for (const el of arr) {
    if (el == 'end of shift') {
      break;
    }

    if (el.match(regex) != null) {
      let match = regex.exec(el).groups;
      sum += Number(match.cost) * Number(match.times);
      console.log(
        `${match.name}: ${match.product} - ${(
          Number(match.cost) * Number(match.times)
        ).toFixed(2)}`
      );
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}

barIncome([
  '%George%<Croissant>|2|10.3$',

  '%Peter%<Gum>|1|1.3$',

  '%Maria%<Cola>|1|2.4$',

  'end of shift',
]);

barIncome([
  '%InvalidName%<Croissant>|2|10.3$',

  '%Peter%<Gum>1.3$',

  '%Maria%<Cola>|1|2.4',

  '%Valid%<Valid>valid|10|valid20$',

  'end of shift',
]);
