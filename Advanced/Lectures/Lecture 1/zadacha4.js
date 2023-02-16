function date(year, month, day) {
  day -= 1;
  month -= 1;
  const solution = new Date(year, month, day);
  console.log(
    `${solution.getFullYear()}-${solution.getMonth() + 1}-${solution.getDate()}`
  );
}

date(2016, 9, 30);
date(2015, 5, 10);
