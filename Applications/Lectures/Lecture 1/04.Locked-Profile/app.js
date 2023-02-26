function lockedProfile() {
  let url = `http://localhost:3030/jsonstore/advanced/profiles`;
  let promise = fetch(url);
  const main = document.getElementById('main');

  promise
    .then((result) => result.json())
    .then((result) => {
      main.innerHTML = ``;
      Object.values(result).map((el) => {
        const profileDiv = document.createElement('div');
        const img = document.createElement('img');
        const lockLabel = document.createElement('label');
        const lockInput = document.createElement('input');
        const unlockLabel = document.createElement('label');
        const unlockInput = document.createElement('input');
        const br = document.createElement('br');
        const hr = document.createElement('hr');
        const hr2 = document.createElement('hr');
        const usernameLabel = document.createElement('label');
        const usernameInput = document.createElement('input');
        const hiddenFieldsDiv = document.createElement('div');
        const emailLabel = document.createElement('label');
        const emailInput = document.createElement('input');
        const ageLabel = document.createElement('label');
        const ageInput = document.createElement('input');
        const button = document.createElement('button');

        profileDiv.classList.add('profile');
        img.classList.add('userIcon');

        img.src = `./iconProfile2.png`;

        lockLabel.textContent = 'Lock';
        lockInput.type = 'radio';
        lockInput.name = 'user1Locked';
        lockInput.value = 'lock';
        lockInput.checked = true;

        unlockLabel.textContent = 'Unlock';
        unlockInput.type = 'radio';
        unlockInput.name = 'user1Locked';
        unlockInput.value = 'unlock';

        usernameLabel.textContent = 'Username';

        usernameInput.type = 'text';
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        usernameInput.name = 'user1Username';
        usernameInput.value = el.username;
        usernameInput.readOnly = true;

        hiddenFieldsDiv.setAttribute('id', 'user1HiddenFields');

        emailLabel.textContent = 'Email:';
        emailInput.type = 'email';
        emailInput.name = 'user1Email';
        emailInput.value = el.email;
        emailInput.readOnly = true;
        emailInput.disabled = true;

        ageLabel.textContent = 'Age:';
        ageInput.type = 'email';
        ageInput.name = 'user1Age';
        ageInput.value = el.age;
        ageInput.readOnly = true;
        ageInput.disabled = true;

        button.textContent = 'Show more';

        button.addEventListener('click', () => {
          if (!unlockInput.checked) {
            return;
          }

          if (lockInput.checked) {
            return;
          }

          if (button.textContent == 'Show more') {
            hiddenFieldsDiv.style.display = 'block';
            button.textContent = 'Hide it';
            return;
          }

          hiddenFieldsDiv.style.display = 'none';
          button.textContent = 'Show more';
        });

        hiddenFieldsDiv.appendChild(hr2);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailInput);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageInput);
        hiddenFieldsDiv.style.display = 'none';

        profileDiv.appendChild(img);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenFieldsDiv);
        profileDiv.appendChild(button);

        main.appendChild(profileDiv);
      });
    })
    .catch((err) => console.log(err));
}
