function tickets(arr, condition) {
  let newArr = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  arr.forEach((el) => {
    [destination, price, statuses] = el.split('|');
    price = Number(price);
    newArr.push(new Ticket(destination, price, statuses));
  });

  if (condition == 'destination') {
    newArr.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (condition == 'price') {
    newArr.sort((a, b) => a - b);
  } else {
    newArr.sort((a, b) => a.status.localeCompare(b.status));
  }

  return newArr;
}

tickets(
  [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed',
  ],

  'destination'
);

tickets(
  [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed',
  ],

  'status'
);
