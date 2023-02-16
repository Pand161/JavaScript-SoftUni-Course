function towns(arr) {
  for (let j = 0; j < arr.length; j++) {
    let arrSplit = arr[j].split(' | ');
    let info = {
      town: arrSplit[0],
      latitude: Number(arrSplit[1]).toFixed(2),
      longitude: Number(arrSplit[2]).toFixed(2),
    };
    console.log(info);
  }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
