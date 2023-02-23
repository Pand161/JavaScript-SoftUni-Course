class WineSelection {
  constructor(space) {
    this.space = Number(space);
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space < 1) {
      throw new Error('Not enough space in the cellar.');
    }

    this.space -= 1;
    this.wines.push({ wineName, wineType, price, paid: false });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    let wine = this.wines.find((x) => x.wineName == wineName);

    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (wine.paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    }

    wine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    let wine = this.wines.find((x) => x.wineName == wineName);

    if (!wine) {
      throw new Error("The wine, you're looking for, is not found.");
    }

    if (wine.paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines.splice(this.wines.indexOf(wine), 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    let str = '';

    if (!wineType) {
      str += `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map(
          (x) =>
            (str += `${x.wineName} > ${x.wineType} - ${
              x.paid ? 'Has Paid' : 'Not Paid'
            }.\n`)
        );
      return str.slice(0, str.length - 1);
    }

    let wine = this.wines.filter((x) => x.wineType == wineType);

    if (wine.length < 1) {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }

    wine.map(
      (x) =>
        (str += `${x.wineName} > ${x.wineType} - ${
          x.paid ? 'Has Paid' : 'Not Paid'
        }.\n`)
    );
    return str.slice(0, str.length - 1);
  }
}

const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('asdasd', 'Red', 120);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision('asd'));
