function create(words) {
  const content = document.getElementById('content');

  words.forEach((str) => {
    let divElement = document.createElement('div');
    let pElement = document.createElement('p');

    pElement.textContent = str;
    pElement.style.display = 'none';

    divElement.appendChild(pElement);

    divElement.addEventListener('click', (e) => {
      pElement.style.display = 'block';
    });

    content.appendChild(divElement);
  });
}
