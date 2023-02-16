function heroInventory(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let [heroName, heroLevel, heroItems] = arr[i].split(' / ');

    heroLevel = Number(heroLevel);
    heroItems = heroItems ? heroItems.split(', ') : [];

    arr2.push({
      name: heroName,
      level: heroLevel,
      items: heroItems,
    });
  }

  console.log(JSON.stringify(arr2));
}

heroInventory([
  'Isacc / 25 / Apple, GravityGun',

  'Derek / 12 / BarrelVest, DestructionSword',

  'Hes / 1 / Desolator, Sentinel, Antara',
]);
