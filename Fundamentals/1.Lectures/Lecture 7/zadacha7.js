function minerTask(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += Number(arr[i + 1]);
    } else {
      obj[arr[i]] = Number(arr[i + 1]);
    }
  }

  for (const line in obj) {
    console.log(`${line} -> ${obj[line]}`);
  }
}

minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
