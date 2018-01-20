import {Stack1, Stack2, Stack3} from '../../src/stack/stack.js';
import chai from 'chai'

let expect = chai.expect;
let stack1 = Reflect.construct(Stack1, []);
let stack2 = Reflect.construct(Stack2, []);
let stack3 = Reflect.construct(Stack3, []);

describe('stack/stack.js::Stack1', () => {
  let a = [11, 22, 33, 44];
  it('stack1.push() = new Array().length', () => {
    expect(stack1.push(a[0])).to.be.equal(1);
    expect(stack1.push(a[1])).to.be.equal(2);
    expect(stack1.push(a[2])).to.be.equal(3);
    expect(stack1.push(a[3])).to.be.equal(4);
  });
  it('stack1.peek()', () => {
    expect(stack1.length()).to.be.equal(a.length);
    expect(stack1.dataStore.toString()).to.be.equal(a.toString());
    expect(stack1.peek()).to.be.equal(a[a.length - 1]);
  });

  it('stack1.pop()', () => {
    expect(stack1.pop()).to.be.equal(a.pop());
    expect(stack1.length()).to.be.equal(a.length);
    expect(stack1.dataStore.toString()).to.be.equal(a.toString());
    expect(stack1.peek()).to.be.equal(a[a.length - 1]);
  });
});

describe('stack/stack.js::Stack2', () => {
  let a = [11, 22, 33, 44];
  let b = [11, 22, 33, 44];
  it('stack2.push()', () => {
    expect(stack2.push(a[0])).to.be.equal(1);
    expect(stack2.push(a[1])).to.be.equal(2);
    expect(stack2.push(a[2])).to.be.equal(3);
    expect(stack2.push(a[3])).to.be.equal(4);
  });

  it('stack2.peek()', () => {
    expect(stack2.length()).to.be.equal(a.length);
    expect(stack2.dataStore.toString()).to.be.equal(b.toString());
    expect(stack2.peek()).to.be.equal(a[a.length - 1]);
  });

  it('stack2.pop()', () => {
    expect(stack2.pop()).to.be.equal(a.pop());
    expect(stack2.length()).to.be.equal(a.length);
    expect(stack2.dataStore.toString()).to.be.equal(b.toString());
    expect(stack2.peek()).to.be.equal(a[a.length - 1]);
  });

  it('stack2.pop()/peek()', () => {
    expect(stack2.pop()).to.be.equal(a.pop());
    expect(stack2.length()).to.be.equal(a.length);
    expect(stack2.dataStore.toString()).to.be.equal(b.toString());
    expect(stack2.peek()).to.be.equal(a[a.length - 1]);
  });
});

describe('stack/stack.js::Stack3', () => {
  let a = [44, 33, 22, 11];
  it('stack3.push()', () => {
    expect(stack3.push(a[3])).to.be.equal(1);
    expect(stack3.push(a[2])).to.be.equal(2);
    expect(stack3.push(a[1])).to.be.equal(3);
    expect(stack3.push(a[0])).to.be.equal(4);
  });

  it('stack3.peek()', () => {
    expect(stack3.length()).to.be.equal(a.length);
    expect(stack3.dataStore.toString()).to.be.equal(a.toString());
    expect(stack3.peek()).to.be.equal(a[0]);
  });

  it('stack3.pop()/peek()', () => {
    expect(stack3.pop()).to.be.equal(a.shift());
    expect(stack3.length()).to.be.equal(a.length);
    expect(stack3.dataStore.toString()).to.be.equal(a.toString());
    expect(stack3.peek()).to.be.equal(a[0]);
  });
});
