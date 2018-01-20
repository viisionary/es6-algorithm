export default class Amap {
  constructor(data) {
    this.dataStore = new Map(data);
  }

  set(k, v) {
    this.dataStore.set(k, v);
    return true;
  }

  get(k) {
    return this.dataStore.get(k);
  }

  size() {
    return this.dataStore.size;
  }

  has(k) {
    return this.dataStore.has(k);
  }

  delete(key) {
    return this.dataStore.delete(key);
  }

  showAll() {
    return [...this];
  }

  sort() {
    let entries = this.entries();
    entries.sort(([a, b], [c, d]) => {
      return c - a;
    });
    return new Amap(entries);
  }

  clear() {
    this.dataStore.clear();
    return true;
  }

  [Symbol.iterator]() {
    return this.dataStore[Symbol.iterator]();
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
