class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error('Not enough space in the collection.');
    }

    this.books.push({ bookName, bookAuthor, paid: false });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    if (!this.books.some((c) => c.bookName == bookName)) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (this.books.find((x) => x.bookName == bookName).paid == true) {
      throw new Error(`${bookName} has already been paid.`);
    }

    this.books.find((x) => x.bookName == bookName).paid = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    if (!this.books.some((c) => c.bookName == bookName)) {
      throw new Error("The book, you're looking for, is not found.");
    }

    if (this.books.find((x) => x.bookName == bookName).paid == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books.splice(
      this.books.indexOf(this.books.find((x) => x.bookName == bookName)),
      1
    );
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

    if (bookAuthor === undefined) {
      let str = `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.\n`;
      this.books.map((a) => {
        str += `${a.bookName} == ${a.bookAuthor} - ${
          a.paid ? 'Has Paid' : 'Not Paid'
        }.\n`;
      });
      return str.slice(0, str.length - 1);
    }

    if (!this.books.some((c) => c.bookAuthor == bookAuthor)) {
      throw new Error(`${bookAuthor} is not in the collection.`);
    }

    let str = '';

    this.books.map((a) => {
      if (a.bookAuthor == bookAuthor) {
        str += `${a.bookName} == ${a.bookAuthor} - ${
          a.paid ? 'Has Paid' : 'Not Paid'
        }.\n`;
      }
    });

    return str.slice(0, str.length - 1);
  }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
