function checkPalindromeIntegers(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(isPalindrome(arr1[i]));
  }

  function isPalindrome(val) {
    let str = val.toString();
    let reverseString = '';

    for (let i = str.length - 1; i >= 0; i--) {
      reverseString += str[i];
    }

    return str === reverseString;
  }
}

checkPalindromeIntegers([123, 323, 421, 121]);
