export class Tode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 0;
  }

  show() {
    return `-${this.data.toString()}-`;
  }

  getCount() {
    return this.count;
  }
}

export class BST {
  constructor() {
    this.root = null;
    this.puts = [];
  }

  insert(tode) {
    if (!tode instanceof Tode) {
      return false;
    }

    let tempTode = this.find(tode.data);
    if(tempTode !== null) {
      tempTode.count++;
      return true;
    }

    tode.count++;

    if (this.root === null) {
      this.root = tode;
      return true;
    }

    let parent = null;
    let current = this.root;
    while (true) {
      parent = current;
      if (tode.data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = tode;
          return true;
        }
      }
      else {
        current = current.right;
        if (current === null) {
          parent.right = tode;
          return true;
        }
      }
    }

  }

  morder(tode) {
    if(!(tode === null)) {
      this.morder(tode.left);
      this.put(tode.data);
      this.morder(tode.right);
    }
  }

  lorder(tode) {
    if(!(tode === null)) {
      this.put(tode.data);
      this.lorder(tode.left);
      this.lorder(tode.right);
    }
  }

  rorder(tode) {
    if(!(tode === null)) {
      this.rorder(tode.left);
      this.rorder(tode.right);
      this.put(tode.data);
    }
  }

  put(data) {
    this.puts.push(data);
  }

  get() {
    return this.puts;
  }

  clear() {
    this.puts = [];
  }

  getMinV1() {
    this.clear();
    this.morder(this.root);
    let min = Math.min(...this.puts);
    this.clear();
    return min;
  }

  getMinV2() {
    let current = this.root;
    while (!(current.left === null)) {
      current = current.left;
    }
    return current.data;
  }

  getMaxV1() {
    this.clear();
    this.morder(this.root);
    let max = Math.max(...this.puts);
    this.clear();
    return max;
  }

  getMaxV2() {
    let current = this.root;
    while (!(current.right === null)) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      else if (data < current.data) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }
    return null;
  }

  findParent(data) {
    let current = this.root;
    let parent = null;
    while (current !== null) {
      if (current.data === data) {
        return parent;
      }
      else if (data < current.data) {
        parent = [current, 'left'];
        current = current.left;
      }
      else {
        parent = [current, 'right'];
        current = current.right;
      }
    }
    return null;
  }

  fps(data) {
    let tempNode = this.find(data);
    if (tempNode !== null) {
      return tempNode.getCount();
    }
    return 0;
  }

  sdelete(data) {
    if (data === this.root.data) {
      this.root = null;
      return true;
    }
    let tempNode = this.findParent(data);
    if (tempNode !== null) {
      tempNode[0][tempNode[1]] = null;
      return true;
    }
    return false;
  }

  hdelete(data) {

  }

}

let tree = new BST();
tree.insert(new Tode(9))
tree.insert(new Tode(12))
tree.insert(new Tode(11))
tree.insert(new Tode(15))
tree.insert(new Tode(2))
tree.insert(new Tode(10))
console.log(tree)