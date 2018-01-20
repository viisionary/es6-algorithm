export default class Queue {
  constructor() {
    this.dataStore = [];
  }

  push(element) {
    return this.dataStore.push(element);
  }

  pop() {
    return this.dataStore.shift();
  }

  first() {
    return this.dataStore[0];
  }

  end() {
    return this.dataStore[this.length() - 1];
  }

  length() {
    return this.dataStore.length;
  }

  toString() {
    return this.dataStore.toString();
  }

  empty() {
    this.dataStore = [];
    return this.length();
  }
}

