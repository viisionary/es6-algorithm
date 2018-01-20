export default class Aset {
  static union(set1, set2) {
    return Reflect.construct(Aset, [...set1, ...set2])
  }

  static intersect(set1, set2) {
    let arr = [];
    [...set1].forEach(v => {
      if(set2.has(v)) {
        arr.push(v);
      }
    });
    return Reflect.construct(Aset, arr)
  }

  static diff(set1, set2) {
    let arr = [];
    if(set2.size() < set1.size()) {
      ([set1, set2] = [set2, set1]);
    }

    [...set2].forEach(v => {
      if(!set1.has(v)) {
        arr.push(v);
      }
    });
    return Reflect.construct(Aset, arr)
  }

  static sub(set1, set2) {
    let arr = [];
    if(set2.size() > set1.size()) {
      ([set1, set2] = [set2, set1]);
    }

    [...set2].forEach(v => {
      if(!set1.has(v)) {
        arr.push(v);
      }
    });

    return arr.length > 0 ? false : true;

  }

  constructor(...data) {
    this.dataStore = new Set([...data]);
  }

  size() {
      return this.dataStore.size;
  }

  add(element) {
    return this.dataStore.add(element);
  }

  remove(element) {
    return this.dataStore.delete(element)
  }

  show() {
    return [...this];
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

  has(element) {
    return this.dataStore.has(element);
  }

  [Symbol.iterator]() {
    return this.dataStore[Symbol.iterator]();
  }

}
