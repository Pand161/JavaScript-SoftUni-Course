function solve() {
  const nameInput = document.querySelector('#container input');
  const ageInput = document.querySelectorAll('#container input')[1];
  const kindInput = document.querySelectorAll('#container input')[2];
  const ownerInput = document.querySelectorAll('#container input')[3];
  const addBtn = document.querySelector('#container button');
  const adoption = document.querySelector('#adoption ul');
  const adopted = document.querySelector('#adopted ul');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nameVal = nameInput.value;
    const ageVal = ageInput.value;
    const kindVal = kindInput.value;
    const ownerVal = ownerInput.value;

    if (
      nameVal == '' ||
      ageVal == '' ||
      !Number(ageVal) ||
      kindVal == '' ||
      ownerVal == ''
    ) {
      return;
    }

    let p = document.createElement('p');
    let li = document.createElement('li');
    let ownerSpan = document.createElement('span');
    let contactBtn = document.createElement('button');

    ownerSpan.textContent = 'Owner: ' + ownerVal;
    contactBtn.textContent = 'Contact with owner';

    contactBtn.addEventListener('click', () => {
      e.preventDefault();
      let div = document.createElement('div');
      let inputName = document.createElement('input');
      let finishBtn = document.createElement('button');

      inputName.placeholder = 'Enter your names';
      finishBtn.textContent = 'Yes! I take it!';

      finishBtn.addEventListener('click', () => {
        if (inputName.value == '') {
          return;
        }

        adopted.appendChild(li);
        ownerSpan.textContent = 'New Owner: ' + inputName.value;

        let checkedBtn = document.createElement('button');
        checkedBtn.textContent = 'Checked';

        checkedBtn.addEventListener('click', () => {
          li.remove();
        });

        li.appendChild(checkedBtn);
        div.remove();
      });

      div.appendChild(inputName);
      div.appendChild(finishBtn);

      contactBtn.remove();
      li.appendChild(div);
    });

    p.innerHTML = `<strong>${nameVal}</strong> is a <strong>${ageVal}</strong> year old <strong>${kindVal}</strong>`;

    li.appendChild(p);
    li.appendChild(ownerSpan);
    li.appendChild(contactBtn);

    adoption.appendChild(li);

    nameInput.value = '';
    ageInput.value = '';
    kindInput.value = '';
    ownerInput.value = '';
  });
}
