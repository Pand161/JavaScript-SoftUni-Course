function solve() {
  const input = document.querySelector('#searchField');
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    //   TODO:
    const arr = Array.from(document.querySelectorAll('tbody tr')).forEach(
      (el) => {
        if (el.textContent.includes(input.value)) {
          el.classList.add('select');
        } else {
          el.classList.remove('select');
        }
      }
    );
  }
}
