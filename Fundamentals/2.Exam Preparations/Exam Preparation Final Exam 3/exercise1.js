function passwordReset(arr) {
  let password = arr.shift();
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] == 'Done') {
      break;
    }

    const info = arr[i].split(' ');
    const command = info[0];

    if (command == 'TakeOdd') {
      let newpassword = '';
      for (let j = 0; j < password.length; j++) {
        if (j % 2 != 0) {
          newpassword += password[j];
        }
      }
      password = newpassword;
      console.log(password);
    } else if (command == 'Cut') {
      let startIndex = Number(info[1]);
      let endIndex = Number(info[2]) + startIndex;

      password = password.slice(0, startIndex) + password.slice(endIndex);
      console.log(password);
    } else {
      let substring = info[1];
      let substitute = info[2];
      if (password.includes(substring)) {
        for (let j = 0; j < password.length; j++) {
          password = password.replace(substring, substitute);
        }
        console.log(password);
      } else {
        console.log('Nothing to replace!');
      }
    }
  }

  console.log(`Your password is: ${password}`);
}

passwordReset([
  'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
  'TakeOdd',
  'Cut 15 3',
  'Substitute :: -',
  'Substitute | ^',
  'Done',
]);
