function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const arr = input.value.split('.').filter((str) => str.length > 0);
  let str = '';

  for (let i = 1; i <= arr.length; i++) {
    str += arr[i - 1] + '.';

    if (i % 3 == 0 || i + 1 > arr.length) {
      output.innerHTML += `<p>${str.trim()}</p>`;
      str = '';
    }
  }

  debugger;
}

// function solve() {
//   let input = document.getElementById('input');
//   let arr = input.value.split('.');
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 3 == 0) {
//       arr[i] = 'ppp' + arr[i];
//     }
//     arr[i] += '.';
//     str += arr[i];
//   }
//   str = str.slice(0, str.length - 1);

//   document.getElementById('output').innerHTML = str.split('ppp').join('<p>');
//   debugger;
// }
