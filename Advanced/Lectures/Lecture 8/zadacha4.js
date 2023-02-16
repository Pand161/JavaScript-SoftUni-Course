class List {
  arr = [];
  size = 0;

  sort() {
    this.arr.sort((a, b) => a - b);
  }

  add(el) {
    this.arr.push(el);
    this.sort();
    this.size++;
  }

  get(index) {
    if (index >= 0 && index < this.arr.length) {
      return this.arr[index];
    }
  }

  remove(index) {
    if (index >= 0 && index < this.arr.length && this.arr.length > 0) {
      this.arr.splice(index, 1);
      this.sort();
      this.size--;
    }
  }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);
console.log(list.get(1));

console.log(list.size);
