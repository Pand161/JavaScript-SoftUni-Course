function passwordValidator(password) {
  const validLength = isValidLength(password);
  const validSymbols = isValidSymbols(password);
  const validDigits = includesTwoDigits(password);

  if (!validLength) {
    console.log('Password must be between 6 and 10 characters');
  }

  if (!validSymbols) {
    console.log('Password must consist only of letters and digits');
  }

  if (!validDigits) {
    console.log('Password must have at least 2 digits');
  }

  if (validLength && validSymbols && validDigits) {
    console.log('Password is valid');
  }

  function isValidLength(password) {
    return !(password.length > 10 || password.length < 6);
  }

  function isValidSymbols(password) {
    for (let i = 0; i < password.length; i++) {
      const charCode = password[i].charCodeAt(0);

      if (
        (charCode < 48 || charCode > 57) &&
        (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function includesTwoDigits(password) {
    let digits = 0;

    for (let i = 0; i < password.length; i++) {
      if (!isNaN(password[i])) {
        digits++;
      }
    }

    return !(digits < 2);
  }
}

passwordValidator('logIn');
