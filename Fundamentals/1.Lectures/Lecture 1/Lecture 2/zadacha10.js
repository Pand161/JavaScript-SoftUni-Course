function spice(numberOfSpice) {
  let sumSpice = 0;
  let counter = 0;

  for (let i = numberOfSpice; i >= 100; i -= 10) {
    sumSpice += i - 26;
    counter++;

    if (i - 10 < 100) {
      sumSpice -= 26;
    }
  }

  console.log(counter);
  console.log(sumSpice);
}

spice(111);
