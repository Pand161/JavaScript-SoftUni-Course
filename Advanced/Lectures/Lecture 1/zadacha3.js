function sameNumbers(num) {
  let bool = true;
  let str = num + '';
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1] && i < str.length - 1) {
      bool = false;
    }

    sum += Number(str[i]);
  }

  console.log(bool);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
