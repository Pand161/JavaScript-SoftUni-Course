function validate() {
  let regex = /[a-z]+@[a-z]+\.[a-z]+/gm;
  let input = document.getElementById('email');
  input.addEventListener('change', () => {
    if (!regex.test(input.value)) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
}
