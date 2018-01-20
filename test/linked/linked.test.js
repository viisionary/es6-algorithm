import {Linked, Node} from '../../src/linked/linked.js';
import chai from 'chai'

let expect = chai.expect;
let list = Reflect.construct(Linked, []);
let l = console.log.bind(console);

describe('linked/linked.js::Linked', () => {
  it('list.push()/display()', () => {
    expect(list.push(1)).to.be.equal(undefined);
    expect(list.push(new Node(1))).to.be.equal(1);
    expect(list.display().toString()).to.be.equal('1-1-1');
    expect(list.push(new Node(2))).to.be.equal(2);
    expect(list.display().toString()).to.be.equal('2-1-2,1-2-1');
    expect(list.push(new Node(3))).to.be.equal(3);
    expect(list.display().toString()).to.be.equal('3-1-2,1-2-3,2-3-1');
    expect(list.push(new Node(4))).to.be.equal(4);
    expect(list.display().toString()).to.be.equal('4-1-2,1-2-3,2-3-4,3-4-1');
    expect(list.push(new Node(5))).to.be.equal(5);
    expect(list.display().toString()).to.be.equal('5-1-2,1-2-3,2-3-4,3-4-5,4-5-1');
    expect(list.push(new Node(6))).to.be.equal(6);
    expect(list.display().toString()).to.be.equal('6-1-2,1-2-3,2-3-4,3-4-5,4-5-6,5-6-1');
  });
  it('list.find()', () => {
    expect(list.find(3)).to.be.equal(undefined);
    expect(list.find(false)).to.be.equal(undefined);
    expect(list.find('hello')).to.be.equal(undefined);
    expect(list.find(new Node(3))['has']).to.be.true;
    expect(list.find(new Node(66))).to.be.equal(undefined);
    expect(list.find(new Node('hello'))).to.be.equal(undefined);
  });
  it('list.insert()', () => {
    expect(list.insert(new Node(6), false)).to.be.equal(undefined);
    expect(list.insert(1, new Node(false))).to.be.equal(undefined);
    expect(list.insert(1, 2)).to.be.equal(undefined);
    expect(list.insert(new Node(6), new Node(6))).to.be.false;
    expect(list.insert(new Node(6), new Node(7))['insert']).to.be.true;
  });
  it('list.front()/end()', () => {
    expect(list.front()['v']).to.be.equal(1);
    expect(list.end()['v']).to.be.equal(6);
  });
  it('list.remove()', () => {
    expect(list.remove(1)).to.be.equal(undefined);
    expect(list.remove(false)).to.be.equal(undefined);
    expect(list.remove(true)).to.be.equal(undefined);
    expect(list.remove([])).to.be.equal(undefined);
    expect(list.remove({})).to.be.equal(undefined);
    expect(list.remove('hello')).to.be.equal(undefined);
    expect(list.remove(new Node(124))).to.be.equal(undefined);
    expect(list.remove(new Node(false))).to.be.equal(undefined);
    expect(list.remove(new Node(3))).to.be.true;
    expect(list.push(new Node(3))).to.be.equal(7);
  });
  it('list.display()/reverse()', () => {
    l('正序(简化)显示链表(上个节点-当前节点-下个节点)：');
    l(list.display());
    l('反序显示链表(上个节点-当前节点-下个节点)：');
    l(list.reverse());
  });
});
