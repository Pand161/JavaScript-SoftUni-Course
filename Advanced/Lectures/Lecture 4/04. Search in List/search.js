function search() {
  const arr = Array.from(document.querySelectorAll('#towns li'));
  const result = document.querySelector('#result');
  let text = document.getElementById('searchText').value;
  let counter = 0;
  arr.forEach((el) => {
    if (el.textContent.includes(text)) {
      el.style.fontWeight = 'bold';
      el.style.textDecoration = 'underline';
      counter++;
    } else {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
    }
  });

  result.textContent = `${counter} matches found`;
  debugger;
}
