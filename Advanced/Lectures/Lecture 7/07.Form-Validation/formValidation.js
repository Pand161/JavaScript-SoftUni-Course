function validate() {
  const button = document.getElementById('submit');
  const passwordRegex = /[a-zA-Z0-9_]+/gm;
  const usernameRegex = /[^(a-zA-Z0-9_)]+/gm;
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const companyCheckbox = document.getElementById('company');
  const companyFieldSet = document.getElementById('companyInfo');
  const companyNumber = document.getElementById('companyNumber');
  const valid = document.getElementById('valid');

  companyCheckbox.addEventListener('change', () => {
    if (companyCheckbox.checked) {
      companyFieldSet.style.display = 'block';
    } else {
      companyFieldSet.style.display = 'none';
    }
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();

    let username = usernameInput.value.length;
    let password = passwordInput.value.length;
    let email = emailInput.value;
    let number = companyNumber.value;
    const bool = passwordRegex.test(passwordInput.value);
    console.log(bool);
    console.log(passwordInput.value);
    //console.log(usernameRegex.test(usernameInput.value));
    let arrCheker = [];

    if (
      username < 3 ||
      username > 20 ||
      usernameRegex.test(usernameInput.value)
    ) {
      usernameInput.style.borderColor = 'red';
      arrCheker.push(1);
    } else {
      usernameInput.style.border = 'none';
      arrCheker.push(0);
    }

    if (
      password >= 5 &&
      password <= 15 &&
      bool == true &&
      passwordInput.value == confirmPasswordInput.value
    ) {
      arrCheker.push(0);
      passwordInput.style.border = 'none';
      confirmPasswordInput.style.border = 'none';
    } else {
      arrCheker.push(1);
      confirmPasswordInput.style.borderColor = 'red';
      passwordInput.style.borderColor = 'red';
    }

    if (email.includes('@')) {
      let test = '@';
      if (email.slice(email.indexOf(test)).includes('.')) {
        emailInput.style.border = 'none';
        arrCheker.push(0);
      } else {
        emailInput.style.borderColor = 'red';
        arrCheker.push(1);
      }
    } else {
      emailInput.style.borderColor = 'red';
      arrCheker.push(1);
    }

    if (companyCheckbox.checked) {
      if (number < 1000 || number > 9999) {
        companyNumber.style.borderColor = 'red';
        arrCheker.push(1);
      } else {
        companyNumber.style.border = 'none';
        arrCheker.push(0);
      }
    }

    if (!arrCheker.includes(1)) {
      valid.style.display = 'block';
    }
    console.log(arrCheker);
  });
}

// function validate() {
//   let form = document.getElementById('registerForm');
//   let username = form['username'];
//   let email = form['email'];
//   let password = form['password'];
//   let confirmPassword = form['confirm-password'];
//   let companyCheckbox = form['company'];
//   let companyNumber = form['companyNumber'];
//   let submitButton = form['submit'];
//   let valid = document.getElementById('valid');

//   companyCheckbox.addEventListener('change', function () {
//     let companyInfo = document.getElementById('companyInfo');
//     if (companyCheckbox.checked) {
//       companyInfo.style.display = 'block';
//     } else {
//       companyInfo.style.display = 'none';
//     }
//   });

//   submitButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     let isValid = true;

//     if (username.value.length < 3 || username.value.length > 20) {
//       isValid = false;
//       username.style.borderColor = 'red';
//     } else if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
//       isValid = false;
//       username.style.borderColor = 'red';
//     } else {
//       username.style.border = 'none';
//     }

//     if (password.value.length < 5 || password.value.length > 15) {
//       isValid = false;
//       password.style.borderColor = 'red';
//     } else if (!/^\w+$/.test(password.value)) {
//       isValid = false;
//       password.style.borderColor = 'red';
//     } else {
//       password.style.border = 'none';
//     }

//     if (confirmPassword.value !== password.value) {
//       isValid = false;
//       confirmPassword.style.borderColor = 'red';
//     } else {
//       confirmPassword.style.border = 'none';
//     }

//     if (!/\S+@\S+\.\S+/.test(email.value)) {
//       isValid = false;
//       email.style.borderColor = 'red';
//     } else {
//       email.style.border = 'none';
//     }

//     if (companyCheckbox.checked) {
//       if (companyNumber.value < 1000 || companyNumber.value > 9999) {
//         isValid = false;
//         companyNumber.style.borderColor = 'red';
//       } else {
//         companyNumber.style.border = 'none';
//       }
//     }

//     if (isValid) {
//       valid.style.display = 'block';
//     } else {
//       valid.style.display = 'none';
//     }
//   });
// }
