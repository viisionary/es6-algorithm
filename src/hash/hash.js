export default class Hash {
  constructor() {
    this.table = new Array(137);
  }

  // 霍纳算法 防碰撞
  simpleHash(value) {
    const H = 37;
    let total = 0;
    for(let i = 0; i < value.length; i++) {
      total += H * total + value.charCodeAt(i);
    }
    return Number.parseInt(total % this.table.length);
  }

  put(value) {
    this.table[this.simpleHash(value)] = value;
  }

  get(value) {
    return this.simpleHash(value);
  }

  show() {
    let entries = this.entries();
    let filter = entries.filter(([a, b]) => {
      return typeof b !== 'undefined';
    });
    return filter;
  }

  [Symbol.iterator]() {
    return this.table[Symbol.iterator]();
  }

  keys() {
    return [...this.table.keys()];
  }

  values() {
    return [...this.table.values()];
  }

  entries() {
    return [...this.table.entries()];
  }

}
