import Queue from '../../src/queue/queue.js';
import chai from 'chai'

let expect = chai.expect;
let queue = Reflect.construct(Queue, []);

describe('queue/queue.js::Queue', () => {
  let a = [11, 22, 33, 44];
  it('queue.push()', () => {
    expect(queue.push(a[0])).to.be.equal(1);
    expect(queue.push(a[1])).to.be.equal(2);
    expect(queue.push(a[2])).to.be.equal(3);
    expect(queue.push(a[3])).to.be.equal(4);
  });

  it('queue.length()/toString()', () => {
    expect(queue.length()).to.be.equal(a.length);
    expect(queue.toString()).to.be.equal(a.toString());
  });

  it('queue.pop()', () => {
    expect(queue.pop()).to.be.equal(a.shift());
    expect(queue.length()).to.be.equal(a.length);
    expect(queue.toString()).to.be.equal(a.toString());
  });

  it('queue.empty()', () => {
    expect(queue.empty()).to.be.equal(0);
    expect(queue.length()).to.be.equal(0);
    expect(queue.toString()).to.be.equal([].toString());
  });
});
