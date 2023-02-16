function solve() {
  const fNameInput = document.getElementById('fname');
  const lNameInput = document.getElementById('lname');
  const emailInput = document.getElementById('email');
  const birthInput = document.getElementById('birth');
  const positionInput = document.getElementById('position');
  const salaryInput = document.getElementById('salary');
  const hireBtn = document.getElementById('add-worker');
  const tbody = document.getElementById('tbody');
  const sum = document.getElementById('sum');

  hireBtn.addEventListener('click', (e) => {
    const fName = fNameInput.value;
    const lName = lNameInput.value;
    const email = emailInput.value;
    const birth = birthInput.value;
    const position = positionInput.value;
    const salary = salaryInput.value;

    e.preventDefault();
    //debugger;
    if (
      fName != '' &&
      lName != '' &&
      email != '' &&
      birth != '' &&
      position != '' &&
      salary != ''
    ) {
      const tr = document.createElement('tr');
      const fNameTd = document.createElement('td');
      const lNameTd = document.createElement('td');
      const emailTd = document.createElement('td');
      const birthTd = document.createElement('td');
      const positionTd = document.createElement('td');
      const salaryTd = document.createElement('td');
      const buttonsTd = document.createElement('td');

      console.log(fNameInput.value);

      fNameTd.textContent = fNameInput.value;
      lNameTd.textContent = lNameInput.value;
      emailTd.textContent = email;
      birthTd.textContent = birth;
      positionTd.textContent = position;
      salaryTd.textContent = salary;
      sum.textContent = (Number(sum.textContent) + Number(salary)).toFixed(2);

      const firedBtn = document.createElement('button');
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit');
      firedBtn.classList.add('fired');
      editBtn.textContent = 'Edit';
      firedBtn.textContent = 'Fired';

      editBtn.addEventListener('click', () => {
        fNameInput.value = fNameTd.textContent;
        lNameInput.value = lNameTd.textContent;
        emailInput.value = emailTd.textContent;
        birthInput.value = birthTd.textContent;
        positionInput.value = positionTd.textContent;
        salaryInput.value = salaryTd.textContent;
        sum.textContent = (Number(sum.textContent) - Number(salary)).toFixed(2);

        tr.remove();
      });

      firedBtn.addEventListener('click', () => {
        sum.textContent = (Number(sum.textContent) - Number(salary)).toFixed(2);
        tr.remove();
      });

      buttonsTd.appendChild(firedBtn);
      buttonsTd.appendChild(editBtn);

      tr.appendChild(fNameTd);
      tr.appendChild(lNameTd);
      tr.appendChild(emailTd);
      tr.appendChild(birthTd);
      tr.appendChild(positionTd);
      tr.appendChild(salaryTd);
      tr.appendChild(buttonsTd);

      tbody.appendChild(tr);

      fNameInput.value = '';
      lNameInput.value = '';
      emailInput.value = '';
      birthInput.value = '';
      positionInput.value = '';
      salaryInput.value = '';
    }
  });
}
solve();
