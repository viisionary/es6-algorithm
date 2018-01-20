export class Tode {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
    this.count = 0
  }
}

export class BST {
  constructor () {
    this.root = null
    this.puts = []
  }

  insert (tode) {
    if (!tode instanceof Tode) {
      return false
    }

    let tempTode = this.find(tode.value)
    if (tempTode !== null) {
      tempTode.count++
      return true
    }

    tode.count++

    if (this.root === null) {
      this.root = tode
      return true
    }

    let parent = null
    let current = this.root
    while (true) {
      parent = current
      if (tode.value < current.value) {
        current = current.left
        if (current === null) {
          parent.left = tode
          return true
        }
      }
      else {
        current = current.right
        if (current === null) {
          parent.right = tode
          return true
        }
      }
    }

  }

  find (value) {
    let current = this.root
    while (current !== null) {
      if (current.value === value) {
        return current
      }
      else if (value < current.value) {
        current = current.left
      }
      else {
        current = current.right
      }
    }
    return null
  }

  morder (tode) {
    if (!(tode === null)) {
      this.morder(tode.left)
      this.puts.push(tode.value)
      this.morder(tode.right)
    }
  }

  lorder (tode) {
    if (!(tode === null)) {
      this.puts.push(tode.value)
      this.lorder(tode.left)
      this.lorder(tode.right)
    }
  }

  rorder (tode) {
    if (!(tode === null)) {
      this.rorder(tode.left)
      this.rorder(tode.right)
      this.puts.push(tode.value)
    }
  }

  clear () {
    this.puts = []
  }

  findParent (value) {
    let current = this.root
    let parent = null
    while (current !== null) {
      if (current.value === value) {
        return parent
      }
      else if (value < current.value) {
        parent = [current, 0]
        current = current.left
      }
      else {
        parent = [current, 1]
        current = current.right
      }
    }
    return null
  }

  sdelete (value) {
    if(value===this.root.value){
      this.root = null
      return true
    }
    let p = this.findParent(value)
    if (!!p) {

      let node = p[0]
      let position = p[1]
      if (position === 0) {
        node.left = null
        return true
      } else {
        node.right = null
        return true
      }

    } else {

      return false
    }
  }

}

let tree = new BST()
tree.insert(new Tode(9))
tree.insert(new Tode(12))
tree.insert(new Tode(11))
tree.insert(new Tode(15))
tree.insert(new Tode(2))
tree.insert(new Tode(10))
console.log(tree)
