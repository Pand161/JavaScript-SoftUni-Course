(async () => {
  const table = document.querySelector('#results tbody');

  await loadStudents();

  document.getElementById('form').addEventListener('submit', submitStudent);

  async function submitStudent(event) {
    event.preventDefault();
    const studentData = Object.fromEntries(new FormData(event.currentTarget));

    if (
      Object.values(studentData).some((x) => x == '') ||
      isNaN(studentData.facultyNumber) ||
      isNaN(studentData.grade)
    ) {
      return;
    }

    await fetch(`http://localhost:3030/jsonstore/collections/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    await loadStudents();

    event.target.reset();
  }

  async function loadStudents() {
    const response = await fetch(
      `http://localhost:3030/jsonstore/collections/students`
    );

    table.innerHTML = '';

    const data = await response.json();

    Object.keys(data).map((el) => {
      const tr = document.createElement('tr');
      const fNameTd = document.createElement('td');
      const lNameTd = document.createElement('td');
      const numberTd = document.createElement('td');
      const gradeTd = document.createElement('td');

      fNameTd.textContent = data[el].firstName;
      lNameTd.textContent = data[el].lastName;
      numberTd.textContent = data[el].facultyNumber;
      gradeTd.textContent = data[el].grade;

      tr.appendChild(fNameTd);
      tr.appendChild(lNameTd);
      tr.appendChild(numberTd);
      tr.appendChild(gradeTd);

      table.appendChild(tr);
    });
  }
})();
