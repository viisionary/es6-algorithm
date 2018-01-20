 export class Stack1 {
  constructor() {
    this.dataStore = [];
  }

  push(element) {
    return this.dataStore.push(element);
  }

  pop() {
    return this.dataStore.pop();
  }

  length() {
    return this.dataStore.length;
  }

  peek() {
    return this.dataStore[this.length() <= 1 ? 0 : this.length() - 1];
  }
}

export class Stack2 {
  constructor() {
    this.top = 0;
    this.dataStore = [];
  }

  push(element) {
    this.dataStore[this.top++] = element;
    return this.length();
  }

  pop() {
    return this.dataStore[--this.top];
  }

  length() {
    return this.top;
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  clear() {
    this.top = 0;
  }
}

export class Stack3 {
   constructor() {
     this.dataStore = [];
   }

   push(element) {
     return this.dataStore.unshift(element);
   }

   pop() {
     return this.dataStore.shift();
   }

   length() {
     return this.dataStore.length;
   }

   peek() {
     return this.dataStore[0];
   }
 }
