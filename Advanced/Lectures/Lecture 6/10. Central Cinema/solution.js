function solve() {
  const [name, hall, price] = document.querySelectorAll('#container input');
  const onScreenBtn = document.querySelector('#container button');
  const movies = document.querySelector('#movies ul');
  const archive = document.querySelector('#archive');
  const ul = archive.querySelector('ul');
  const clearBtn = archive.querySelector('button');

  clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const liElements = ul.querySelectorAll('li');
    Array.from(liElements).forEach((el) => {
      el.remove();
    });
  });

  onScreenBtn.addEventListener('click', onScreenFunc);

  function onScreenFunc(event) {
    event.preventDefault();
    if (
      name.value != '' &&
      hall.value != '' &&
      price.value != '' &&
      price.value == Number(price.value)
    ) {
      let span = document.createElement('span');
      span.textContent = name.value;

      let strong = document.createElement('strong');
      strong.textContent = `Hall: ${hall.value}`;

      let priceStrong = document.createElement('strong');
      priceStrong.textContent = Number(price.value).toFixed(2);

      let input = document.createElement('input');
      input.placeholder = 'Tickets Sold';

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', archiveBtnFunc);

      function archiveBtnFunc() {
        if (input.value == Number(input.value) && input.value != '') {
          let totalPrice =
            Number(priceStrong.textContent) * Number(input.value);
          strong.remove();
          div.remove();

          const strong2 = document.createElement('strong');
          strong2.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', deleteBtnFunc);

          function deleteBtnFunc() {
            li.remove();
          }

          li.appendChild(strong2);
          li.appendChild(deleteBtn);

          ul.appendChild(li);
        }
      }

      let div = document.createElement('div');
      div.appendChild(priceStrong);
      div.appendChild(input);
      div.appendChild(archiveBtn);

      let li = document.createElement('li');

      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(div);

      movies.appendChild(li);
    }

    name.value = '';
    hall.value = '';
    price.value = '';
  }
}
