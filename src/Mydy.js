require('babel-register')
require('babel-polyfill')

class search {
  constructor () {
    this.data = [];
  }

  static max (data) {
    if (data.constructor === Array) {
      let fina = data[0]
      for (let value in data) {
        fina = Math.max(data[value], fina)
      }
      return fina
    }
    return null
  }

  static min (data) {
    if (data.constructor === Array) {
      let fina = data[0]
      for (let value in data) {
        fina = Math.min(data[value], fina)
      }
      return fina
    }
    return null
  }

  findindex (data) {
  }

  contain (data) {
  }

  findvalue () {
  }

  static twoPointLookup (data, value) {

    let a, b;
    let middle = Math.floor(data.length / 2)

    if (data.length === 0){
      return false;
    }

    if (data.length === 1){
      return data[0] === value;
    }


    if (value < data[middle]) {
      a = 0;
      b = middle;
    } else if (value > data[middle]){
      a = middle + 1;
      b = data.length;
    } else {
      return true
    }

    return search.twoPointLookup(data.slice(a, b), value)
  }

}

console.log(search.twoPointLookup([1, 2, 6].sort(), 6))
