function solution(input) {
  let username = input[0];
  let password = '';
  let timesIncorrectpassword = 0;

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  for (let i = 1; i <= 5; i++) {
    if (password == input[i]) {
      console.log(`User ${username} logged in.`);
      break;
    }

    timesIncorrectpassword++;
    if (timesIncorrectpassword >= 4) {
      console.log(`User ${username} blocked!`);
      break;
    }

    console.log(`Incorrect password. Try again.`);
  }
}
solution(['Acer', 'login', 'go', 'let me in', 'recA']);
solution(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
