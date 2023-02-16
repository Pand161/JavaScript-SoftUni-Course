function solution(n) {
  for (let i = 1; i <= n; i++) {
    let numbers = '';

    for (let y = 1; y <= i; y++) {
      numbers += `${i} `;
    }

    console.log(numbers);
  }
}

function solution2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `.repeat(i));
  }
}
