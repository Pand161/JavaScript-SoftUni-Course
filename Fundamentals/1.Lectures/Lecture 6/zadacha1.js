function employees(arr) {
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    let info = {
      employeeName: name,
      personalNum: name.length,
    };
    console.log(
      `Name: ${info.employeeName} -- Personal Number: ${info.personalNum}`
    );
  }
}
employees([
  'Silas Butler',

  'Adnaan Buckley',

  'Juan Peterson',

  'Brendan Villarreal',
]);
