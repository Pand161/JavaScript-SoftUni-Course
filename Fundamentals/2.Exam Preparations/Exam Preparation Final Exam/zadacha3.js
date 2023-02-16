function Pirates(arr) {
  const townsObj = {};
  let count = 0;

  for (const town of arr) {
    if (town == 'Sail') {
      count++;
      break;
    }

    let info = town.split('||');
    let townName = info[0];
    let townPopulation = Number(info[1]);
    let townGold = Number(info[2]);
    if (!townsObj.hasOwnProperty(townName)) {
      townsObj[townName] = { population: 0, gold: 0 };
    }
    townsObj[townName].population += townPopulation;
    townsObj[townName].gold += townGold;
    count++;
  }

  for (let i = 0; i < count; i++) {
    let drugs = arr.shift();
  }

  for (const town of arr) {
    if (town == 'End') {
      break;
    }

    let info = town.split('=>');
    const command = info[0];
    let townName = info[1];

    if (command == 'Plunder') {
      let killedPeople = Number(info[2]);
      let stolenGold = Number(info[3]);
      townsObj[townName].population -= killedPeople;
      townsObj[townName].gold -= stolenGold;
      console.log(
        `${townName} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`
      );
      if (townsObj[townName].population < 1 || townsObj[townName].gold < 1) {
        console.log(`${townName} has been wiped off the map!`);
        delete townsObj[townName];
      }
    } else if (command == 'Prosper') {
      let goldGrowth = Number(info[2]);
      if (goldGrowth < 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
        townsObj[townName].gold += goldGrowth;
        console.log(
          `${goldGrowth} gold added to the city treasury. ${townName} now has ${townsObj[townName].gold} gold.`
        );
      }
    }
  }

  if (Object.keys(townsObj).length < 1) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(townsObj).length
      } wealthy settlements to go to:`
    );
    for (const town in townsObj) {
      console.log(
        `${town} -> Population: ${townsObj[town].population} citizens, Gold: ${townsObj[town].gold} kg`
      );
    }
  }
}

// Pirates([
//   'Tortuga||345000||1250',

//   'Santo Domingo||240000||630',

//   'Havana||410000||1100',

//   'Sail',

//   'Plunder=>Tortuga=>75000=>380',

//   'Prosper=>Santo Domingo=>180',

//   'End',
// ]);

Pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
