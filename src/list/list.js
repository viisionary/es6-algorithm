export default class List {
  constructor() {
    this.pos = 0;
    this.dataStore = [];
  }

  length() {
    return this.dataStore.length;
  }

  toString() {
    return this.dataStore.toString();
  }

  append(...element) {
    if(
      element.length < 1 ||
      element.includes(null) ||
      element.includes(undefined) ||
      element.includes(NaN)
    ) {
      return -1;
    }
    return this.dataStore.push(...element);
  }

  find(element) {
    return this.dataStore.findIndex(v => Object.is(v, element));
  }

  remove(element) {
    let index = this.find(element);
    index > -1 && this.dataStore.splice(index, 1);
    return index;
  }

  clear() {
    this.dataStore = [];
  }

  contains(element) {
    return this.dataStore.includes(element);
  }

  insert(element, val) {
    let index = this.find(element);
    this.dataStore.splice(index, 0, val);
    return index;
  }

  *[Symbol.iterator]() {
    yield* this.dataStore;
  }

  displayCurrentElement() {
    return this.dataStore[this.pos];
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.length() - 1;
  }

  prev() {
    this.pos >= 1 && this.pos--;
  }

  next() {
    this.pos < this.length() - 1 && this.pos++;
  }

  current() {
    return this.pos;
  }

  keys() {
    return [...this.dataStore.keys()];
  }

  values() {
    return [...this.dataStore.values()];
  }

  entries() {
    return [...this.dataStore.entries()];
  }
}
