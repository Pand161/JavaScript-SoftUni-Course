function inventory(arr) {
  const heros = [];

  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split(' / ');
    let name = info[0];
    let level = Number(info[1]);
    let items = info[2];
    heros.push({ name, level, items });
  }

  for (let i = 0; i < heros.length; i++) {
    for (let j = i; j < heros.length; j++) {
      if (heros[i].level > heros[j].level) {
        let lower = heros[i];
        heros[i] = heros[j];
        heros[j] = lower;
      }
    }
  }
  for (let i = 0; i < heros.length; i++) {
    console.log(`Hero: ${heros[i].name}`);
    console.log(`level => ${heros[i].level}`);
    console.log(`items => ${heros[i].items}`);
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',

  'Derek / 12 / BarrelVest, DestructionSword',

  'Hes / 1 / Desolator, Sentinel, Antara',
]);
