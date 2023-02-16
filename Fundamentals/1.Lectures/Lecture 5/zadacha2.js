// Hacker solution

// function distinctArray(arr) {
//   for (let k = 0; k < 2; k++) {
//     for (let i = 0; i < arr.length; i++) {
//       let element = arr[i];
//       for (let j = i + 1; j < arr.length; j++) {
//         if (element == arr[j]) {
//           arr.splice(j, 1);
//         }
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// distinctArray([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]);

// Right solution

function solve(input) {
  let result = [];

  for (let num of input) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  console.log(result.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);
