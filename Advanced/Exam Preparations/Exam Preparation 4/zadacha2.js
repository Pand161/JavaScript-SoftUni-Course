class Movie {
  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.profit = 0;
    this.soldTickets = 0;
    this.screenings = [];
  }

  newScreening(date, hall, description) {
    let movie = this.screenings.find((x) => x.date === date && x.hall === hall);

    if (movie) {
      throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
    }

    this.screenings.push({ date, hall, description });
    return `New screening of ${this.movieName} is added.`;
  }

  endScreening(date, hall, soldTickets) {
    let movie = this.screenings.find((x) => x.date === date && x.hall === hall);

    if (!movie) {
      throw new Error(
        `Sorry, there is no such screening for ${this.movieName} movie.`
      );
    }

    this.profit += this.ticketPrice * soldTickets;
    this.soldTickets += soldTickets;
    this.screenings.splice(this.screenings.indexOf(movie), 1);

    return `${
      this.movieName
    } movie screening on ${date} in ${hall} hall has ended. Screening profit: ${
      this.ticketPrice * soldTickets
    }`;
  }

  toString() {
    let str = `${
      this.movieName
    } full information:\nTotal profit: ${this.profit.toFixed(
      0
    )}$\nSold Tickets: ${this.soldTickets.toFixed(0)}\n`;

    if (this.screenings.length > 0) {
      str += 'Remaining film screenings:\n';
      this.screenings
        .sort((a, b) => a.hall.localeCompare(b.hall))
        .map(
          (movie) =>
            (str += `${movie.hall} - ${movie.date} - ${movie.description}\n`)
        );
      return str.slice(0, str.length - 1);
    }

    return str + 'No more screenings!';
  }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));

console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);

console.log(m.toString());
