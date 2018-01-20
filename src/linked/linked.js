export class Node {

  static equal(n1, n2) {
    if (!(n1 instanceof Node) || !(n2 instanceof Node)) {
      return false;
    }
    if (n1.v === n2.v) {
      return true;
    }
  }

  constructor(v) {
    if (typeof v !== 'number') {
      return false;
    }
    this.v = v;
    this.next = null;
    this.prev = null;
  }

  toString() {
    return this.v;
  }
}

export class Linked {
  constructor() {
    this.length = 0;
    this.head = null;
    this.top = 0;
    this.current = this.head;
  }

  push(node) {

    if (!(node instanceof Node))
      return;

    if (!this.head) {
      this.head = node;
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      let current = this.head.prev;
      current.next = node;
      node.prev = current;
      node.next = this.head;
      this.head.prev = node;
    }
    return ++this.length;
  }

  find(node) {
    if (!(node instanceof Node))
      return;
    for(let n of this) {
      if (n.v === node.v) {
        return {
          has: true,
          node: n
        };
      }
    }
  }

  insert(inode, n) {
    if (!(inode instanceof Node) || !(n instanceof Node))
      return;

    if(Node.equal(inode, n)) {
      return false;
    }

    let findNode = this.find(inode);
    if (findNode && findNode.has) {
      let {node, pnode = node.prev} = findNode;
      pnode.next = n;
      n.prev = pnode;
      n.next = node;
      node.prev = n;
      ++this.length;
      return {
        insert: true,
        node: n
      };
    }
  }

  [Symbol.iterator]() {
    this.top = 0;
    this.current = this.head;
    return this;
  }

  next() {
    if (!this.head) {
      return {value: null, done: true};
    }

    let done = ++this.top > this.length;
    let value = !done ? this.current : null;

    this.current = this.current.next;

    return {value, done};
  }

  display() {
    let arr = [];
    for(let node of this) {
      arr.push(`${node.prev.v}-${node.v}-${node.next.v}`);
    }
    return arr;
  }

  front() {
    return this.head;
  }

  end() {
    return this.head.prev;
  }

  remove(inode) {
    if (!(inode instanceof Node))
      return;
    let findNode = this.find(inode);
    if (findNode && findNode.has) {
      let {node, pnode = node.prev, next = node.next} = findNode;
      pnode.next = next;
      next.prev = pnode;
      --this.length;
      return true;
    }
  }

  reverse() {
    return [...this].reverse();
  }


}

