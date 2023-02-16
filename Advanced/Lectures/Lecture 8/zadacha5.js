class Stringer {
  constructor(str, length) {
    this.innerString = str;
    this.innerLength = length;
  }

  decrease(num) {
    this.innerLength -= num;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  increase(num) {
    this.innerLength += num;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    if (this.innerLength < this.innerString.length) {
      return this.innerString.slice(0, this.innerLength) + '...';
    } else {
      return this.innerString;
    }
  }
}

let test = new Stringer('Testing', 7);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test
