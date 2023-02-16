function movies(arr) {
  let movies = [];

  arr.forEach((el) => {
    if (el.includes('addMovie')) {
      let name = el.split('addMovie ')[1];
      movies.push({ name });
    } else if (el.includes('directedBy')) {
      let [name, director] = el.split(' directedBy ');
      let movie = movies.find((el) => el.name === name);

      if (movie) {
        movie.director = director;
      }
    } else if (el.includes('onDate')) {
      let [name, date] = el.split(' onDate ');
      let movie = movies.find((el) => el.name === name);

      if (movie) {
        movie.date = date;
      }
    }
  });
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].director && movies[i].date) {
      console.log(JSON.stringify(movies[i]));
    }
  }
}

movies([
  'addMovie Fast and Furious',

  'addMovie Godfather',

  'Inception directedBy Christopher Nolan',

  'Godfather directedBy Francis Ford Coppola',

  'Godfather onDate 29.07.2018',

  'Fast and Furious onDate 30.07.2018',

  'Batman onDate 01.08.2018',

  'Fast and Furious directedBy Rob Cohen',
]);

movies([
  'addMovie Superman',

  'addMovie The Avengers',

  'The Avengers onDate 30.07.2010',

  'The Avengers directedBy Anthony Russo',

  'Captain America onDate 30.07.2010',

  'Captain America directedBy Joe Russo',
]);
