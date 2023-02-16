window.addEventListener('load', solve);

function solve() {
  const descriptionInput = document.getElementById('description');
  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const selectProductInput = document.getElementById('type-product');
  const sendBtn = document.querySelector('#right button');
  const receivedOrders = document.getElementById('received-orders');
  const completedOrders = document.getElementById('completed-orders');
  const clearBtn = document.querySelector('#completed-orders button');

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const divElements = document.querySelectorAll('#completed-orders div');
    Array.from(divElements).forEach((el) => {
      el.remove();
    });
  });

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const descriptionValue = descriptionInput.value;
    const phoneValue = phoneInput.value;
    const selectProductValue = selectProductInput.value;

    if (nameValue == '' || phoneValue == '' || descriptionValue == '') {
      return;
    }

    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const startBtn = document.createElement('button');
    const finishBtn = document.createElement('button');
    const div = document.createElement('div');

    h2.textContent = 'Product type for repair: ' + selectProductValue;
    h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;
    h4.textContent = 'Description of the problem: ' + descriptionValue;
    startBtn.textContent = 'Start repair';
    finishBtn.textContent = 'Finish repair';

    startBtn.classList.add('start-btn');
    finishBtn.classList.add('finish-btn');
    div.classList.add('container');

    finishBtn.disabled = true;

    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startBtn.disabled = true;
      finishBtn.disabled = false;
    });

    finishBtn.addEventListener('click', () => {
      completedOrders.appendChild(div);
      finishBtn.remove();
      startBtn.remove();
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startBtn);
    div.appendChild(finishBtn);

    receivedOrders.appendChild(div);

    nameInput.value = '';
    descriptionInput.value = '';
    phoneInput.value = '';
  });
}
