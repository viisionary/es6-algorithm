import {BST, Tode} from '../../src/tree/mytree.js';
import chai from 'chai'

let expect = chai.expect;
let tree = Reflect.construct(BST, []);

describe('tree/tree.js::Tree', () => {
  it('tree.insert()', () => {
    expect(tree.insert(new Tode(9))).to.be.true;
    expect(tree.insert(new Tode(12))).to.be.true;
    expect(tree.insert(new Tode(110))).to.be.true;
    expect(tree.insert(new Tode(15))).to.be.true;
    expect(tree.insert(new Tode(2))).to.be.true;
    expect(tree.insert(new Tode(10))).to.be.true;
    expect(tree.insert(new Tode(36))).to.be.true;
    expect(tree.insert(new Tode(99))).to.be.true;
    expect(tree.insert(new Tode(50))).to.be.true;

  });  
  it('tree.find(2)', () => {
    expect(tree.find(222)).to.be.equal(null);
    expect(tree.find(null)).to.be.equal(null);
    expect(tree.find(undefined)).to.be.equal(null);
    expect(tree.find(NaN)).to.be.equal(null);
    expect(tree.find(2).value).to.be.equal(2);
    expect(tree.find(110).value).to.be.equal(110);
  });
  it('tree.morder(中序遍历,左-中-右)', () => {
    tree.morder(tree.root);
    expect(tree.puts.toString()).to.be.equal('2,9,10,12,15,36,50,99,110');
    tree.clear();

  });
  it('tree.lorder(先序遍历,中-左-右)', () => {
    tree.lorder(tree.root);
    expect(tree.puts.toString()).to.be.equal('9,2,12,10,110,15,36,99,50');
    tree.clear();
  });
  it('tree.rorder(后序遍历,左-右-中)', () => {
    tree.rorder(tree.root);
    expect(tree.puts.toString()).to.be.equal('2,10,50,99,36,15,110,12,9');
    tree.clear();
  });

  // it('tree.getMinV1()', () => {
  //   expect(tree.getMinV1()).to.be.equal(2);
  // });
  //
  // it('tree.getMinV2()', () => {
  //   expect(tree.getMinV2()).to.be.equal(2);
  // });
  //
  // it('tree.getMaxV1()', () => {
  //   expect(tree.getMaxV1()).to.be.equal(110);
  // });
  //
  // it('tree.getMaxV2()', () => {
  //   expect(tree.getMaxV2()).to.be.equal(110);
  // });
  //


  // it('tree.fps()', () => {
  //   expect(tree.fps(222)).to.be.equal(0);
  //   expect(tree.fps('hello')).to.be.equal(0);
  //   expect(tree.fps(undefined)).to.be.equal(0);
  //   expect(tree.fps(false)).to.be.equal(0);
  //   expect(tree.fps(2)).to.be.equal(1);
  //   expect(tree.fps(50)).to.be.equal(1);
  //   expect(tree.fps(15)).to.be.equal(1);
  //   expect(tree.fps(12)).to.be.equal(1);
  //   expect(tree.insert(new Tode(36))).to.be.true;
  //   expect(tree.insert(new Tode(36))).to.be.true;
  //   expect(tree.insert(new Tode(99))).to.be.true;
  //   expect(tree.insert(new Tode(99))).to.be.true;
  //   expect(tree.insert(new Tode(99))).to.be.true;
  //   expect(tree.fps(36)).to.be.equal(3);
  //   expect(tree.fps(99)).to.be.equal(4);
  // });
  it('findparent',()=>{
    expect(tree.findParent(2)[0].value).to.be.equal(9)
    expect(tree.findParent(12)[0].value).to.be.equal(9)
    expect(tree.findParent(999)).to.be.equal(null)
  })

  it('tree.sdelete(999)', () => {
    expect(tree.sdelete(999)).to.be.equal(false);
  });

  it('tree.sdelete(99)', () => {
    expect(tree.sdelete(99)).to.be.equal(true);
    tree.morder(tree.root);
    expect(tree.puts.toString()).to.be.equal('2,9,10,12,15,36,110');
    tree.clear();
  });

  it('tree.sdelete(2)', () => {
    expect(tree.sdelete(2)).to.be.equal(true);
    tree.rorder(tree.root);
    expect(tree.puts.toString()).to.be.equal('10,36,15,110,12,9');
    tree.clear();
  });

  it('tree.sdelete(9)', () => {
    expect(tree.sdelete(9)).to.be.equal(true);
    tree.rorder(tree.root);
    expect(tree.puts.toString()).to.be.equal('');
    tree.clear();
  });

});
