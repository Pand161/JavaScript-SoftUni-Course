function solve() {
  const text = document.querySelector('body div div textarea');
  const textArea = document.querySelectorAll('body div div textarea')[1];
  const elements = document.getElementById('exercise');
  const generateButton = elements.getElementsByTagName('button')[0];
  const buyButton = elements.getElementsByTagName('button')[1];
  const body = document.querySelector(
    'body div div div div div div table tbody'
  );

  generateButton.addEventListener('click', (e) => {
    let arrOfObj = JSON.parse(text.value);

    for (let i = 0; i < arrOfObj.length; i++) {
      let obj = arrOfObj[i];

      let img = document.createElement('img');
      let name = document.createElement('p');
      let price = document.createElement('p');
      let decoFactor = document.createElement('p');
      let checkbox = document.createElement('input');

      checkbox.type = 'checkbox';
      name.textContent = obj.name;
      price.textContent = obj.price;
      decoFactor.textContent = obj.decFactor;
      img.src = obj.img;

      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdDecFactor = document.createElement('td');
      let tdImg = document.createElement('td');
      let tdCheckbox = document.createElement('td');

      tdName.appendChild(name);
      tdPrice.appendChild(price);
      tdDecFactor.appendChild(decoFactor);
      tdImg.appendChild(img);
      tdCheckbox.appendChild(checkbox);

      let wrap = document.createElement('tr');

      wrap.appendChild(tdImg);
      wrap.appendChild(tdName);
      wrap.appendChild(tdPrice);
      wrap.appendChild(tdDecFactor);
      wrap.appendChild(tdCheckbox);

      body.appendChild(wrap);
    }

    buyButton.addEventListener('click', (e) => {
      const el = Array.from(body.querySelectorAll('tr td'));
      let furnitureStr = '';
      let totalPrice = 0;
      let avgDec = 0;
      console.log(el);

      el.forEach((td) => {
        textArea.textContent += td.textContent + ' ';
      });
    });
  });
}
