class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not enough space in the garden.');
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let currentPlant = this.plants.find((x) => x.plantName == plantName);

    if (!currentPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (currentPlant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    currentPlant.ripe = true;
    currentPlant.quantity += quantity;

    if (quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }

    return `${quantity} ${plantName} has successfully ripened.`;
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.storage.push({ plantName: plant.plantName, quantity: plant.quantity });
    this.spaceAvailable += plant.spaceRequired;
    this.plants.splice(this.plants.indexOf(plant), 1);

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

    let str = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;
    this.plants.map((plant) => (str += `${plant.plantName}, `));
    str = str.slice(0, str.length - 2);

    if (this.storage.length < 1) {
      return (str += '\nPlants in storage: The storage is empty.');
    }

    str += '\nPlants in storage: ';
    this.storage.map((x) => (str += `${x.plantName} (${x.quantity}), `));

    return str.slice(0, str.length - 2);
  }
}

const myGarden = new Garden(250);

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 200));

console.log(myGarden.addPlant('raspberry', 10));

console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.harvestPlant('orange'));

console.log(myGarden.generateReport());
