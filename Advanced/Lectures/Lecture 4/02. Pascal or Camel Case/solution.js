function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let regex = /\w+/gm;
  let arr = input.match(regex);
  let output = '';

  if (currentCase == 'Pascal Case') {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      output += arr[i];
    }
  } else if (currentCase == 'Camel Case') {
    output = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      output += arr[i];
    }
  } else {
    output = 'Error!';
  }

  document.getElementById('result').textContent = output;
}
