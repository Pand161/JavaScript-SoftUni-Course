function generateReport() {
  const checker = Array.from(document.querySelectorAll('thead tr th input'));
  const row = Array.from(document.querySelectorAll('tbody tr'));
  const output = document.querySelector('#output');
  let result = [];

  row.forEach((rowElement) => {
    const obj = {};
    Array.from(rowElement.querySelectorAll('td')).forEach((x, i) => {
      if (checker[i].checked) {
        obj[checker[i].name] = x.textContent;
      }
    });

    result.push(obj);
  });

  output.value = JSON.stringify(result);
}
