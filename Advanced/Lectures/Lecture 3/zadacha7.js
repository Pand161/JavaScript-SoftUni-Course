function townsToJSON(arr) {
  let arr1 = [];
  let info = arr.shift().split('|');
  let town = info[1].trim();
  let latitude = info[2].trim();
  let longitude = info[3].trim();

  for (let i = 0; i < arr.length; i++) {
    let information = arr[i].split('|');
    let townName = information[1].trim();
    let latitudeNumber = Number(information[2]).toFixed(2);
    let longitudeNumber = Number(information[3]).toFixed(2);

    let obj = {
      [town]: townName,
      [latitude]: Number(latitudeNumber),
      [longitude]: Number(longitudeNumber),
    };

    arr1.push(JSON.stringify(obj));
  }

  console.log(`[${arr1.join(',')}]`);
}

townsToJSON([
  '| Town | Latitude | Longitude |',

  '| Sofia | 42.696552 | 23.32601 |',

  '| Beijing | 39.913818 | 116.363625 |',
]);
