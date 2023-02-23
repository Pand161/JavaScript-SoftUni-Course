window.addEventListener('load', solve);

function solve() {
  const fNameInput = document.getElementById('first-name');
  const lNameInput = document.getElementById('last-name');
  const peopleInput = document.getElementById('people-count');
  const dateInput = document.getElementById('from-date');
  const daysInput = document.getElementById('days-count');
  const nextBtn = document.getElementById('next-btn');
  const ul = document.querySelector('#info-ticket .ticket-info-list');
  const confirmTicketUl = document.querySelector(
    '#confirm-ticket-section div div ul'
  );
  const mainDiv = document.getElementById('main');
  const body = document.querySelector('body');

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const fNameValue = fNameInput.value;
    const lNameValue = lNameInput.value;
    const peopleValue = peopleInput.value;
    const dateValue = dateInput.value;
    const daysValue = daysInput.value;

    if (
      fNameValue == '' ||
      lNameValue == '' ||
      peopleValue == '' ||
      dateValue == '' ||
      daysValue == ''
    ) {
      return;
    }

    const nameH3 = document.createElement('h3');
    const dateP = document.createElement('p');
    const daysP = document.createElement('p');
    const peopleP = document.createElement('p');
    const article = document.createElement('article');
    const editBtn = document.createElement('button');
    const continueBtn = document.createElement('button');
    const li = document.createElement('li');

    nameH3.textContent = 'Name: ' + fNameValue + ' ' + lNameValue;
    dateP.textContent = 'From date: ' + dateValue;
    daysP.textContent = 'For ' + daysValue + ' days';
    peopleP.textContent = 'For ' + peopleValue + ' people';
    editBtn.textContent = 'Edit';
    continueBtn.textContent = 'Continue';

    editBtn.classList.add('edit-btn');
    continueBtn.classList.add('continue-btn');
    li.classList.add('ticket');

    editBtn.addEventListener('click', () => {
      fNameInput.value = fNameValue;
      lNameInput.value = lNameValue;
      peopleInput.value = peopleValue;
      dateInput.value = dateValue;
      daysInput.value = daysValue;
      nextBtn.disabled = false;
      li.remove();
    });

    continueBtn.addEventListener('click', () => {
      li.classList.remove('ticket');
      li.classList.add('ticket-content');
      const confirmBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');

      confirmBtn.textContent = 'Confirm';
      cancelBtn.textContent = 'Cancel';

      confirmBtn.classList.add('confirm-btn');
      cancelBtn.classList.add('cancel-btn');

      confirmBtn.addEventListener('click', () => {
        mainDiv.remove();

        const h1 = document.createElement('h1');
        const backBtn = document.createElement('button');

        h1.setAttribute('id', 'thank-you');
        h1.textContent = 'Thank you, have a nice day!';

        backBtn.setAttribute('id', 'back-btn');
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () => {
          document.location.reload(true);
        });

        body.appendChild(h1);
        body.appendChild(backBtn);
      });

      cancelBtn.addEventListener('click', () => {
        li.remove();
        nextBtn.disabled = false;
      });

      confirmTicketUl.appendChild(li);

      editBtn.remove();
      continueBtn.remove();

      li.appendChild(confirmBtn);
      li.appendChild(cancelBtn);
    });

    article.appendChild(nameH3);
    article.appendChild(dateP);
    article.appendChild(daysP);
    article.appendChild(peopleP);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    ul.appendChild(li);

    nextBtn.disabled = true;

    fNameInput.value = '';
    lNameInput.value = '';
    peopleInput.value = '';
    dateInput.value = '';
    daysInput.value = '';
  });
}
