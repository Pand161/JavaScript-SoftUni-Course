function solution(start, end) {
  let sum = 0;
  let numbers = '';

  for (; start <= end; start++) {
    numbers += `${start} `;
    sum += start;
  }

  console.log(numbers);
  console.log(`Sum: ${sum}`);
}
solution(5, 10);
