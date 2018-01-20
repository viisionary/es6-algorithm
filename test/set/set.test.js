import Aset from '../../src/set/set.js';
import chai from 'chai'

let expect = chai.expect;
let aset = Reflect.construct(Aset, []);
let l = console.log.bind(console);

describe('set/set.js::Aset', () => {
  it('aset.add()/sze()/show()', () => {
    aset.add(1);
    expect(aset.size()).to.be.equal(1);
    expect(aset.show().toString()).to.be.equal('1');

    aset.add(2);
    expect(aset.size()).to.be.equal(2);
    expect(aset.show().toString()).to.be.equal('1,2');

    aset.add(3);
    expect(aset.size()).to.be.equal(3);
    expect(aset.show().toString()).to.be.equal('1,2,3');

    aset.add('hello');
    expect(aset.size()).to.be.equal(4);
    expect(aset.show().toString()).to.be.equal('1,2,3,hello');

    aset.add(2);
    expect(aset.size()).to.be.equal(4);
    expect(aset.show().toString()).to.be.equal('1,2,3,hello');
  });

  it('aset.has()', () => {
    expect(aset.has(1)).to.be.true;
    expect(aset.has(2)).to.be.true;
    expect(aset.has(3)).to.be.true;
    expect(aset.has(4)).to.be.false;
    expect(aset.has('hello')).to.be.true;
  });

  it('aset.remove()', () => {
    aset.remove(2);
    expect(aset.has(2)).to.be.false;
    expect(aset.size()).to.be.equal(3);
    expect(aset.show().toString()).to.be.equal('1,3,hello');
    l(aset.show());
  });

  let bset, uset;
  it('aset.union()', () => {
    bset = new Aset(1, 3, 11, 22, 'hello', 'hi', 'this', false, true);
    uset = Aset.union(aset, bset);
    expect(uset.size()).to.be.equal(9);
    expect(uset.show().toString()).to.be.equal('1,3,hello,11,22,hi,this,false,true');
    l(uset.show());
  });

  it('aset.intersect()', () => {
    let jset1 = Aset.intersect(uset, new Aset(1, 3, 'hello', 8, 9, false))
    expect(jset1.size()).to.be.equal(4);
    expect(jset1.show().toString()).to.be.equal('1,3,hello,false');
    l(jset1.show());

    let jset2 = Aset.intersect(uset, new Aset(11, 22, 'hi', 6, 7, true))
    expect(jset2.size()).to.be.equal(4);
    expect(jset2.show().toString()).to.be.equal('11,22,hi,true');
    l(jset2.show());
  });

  it('aset.diff()', () => {
    let diff = Aset.diff(uset, new Aset(1, 3, 11, 22))
    expect(diff.size()).to.be.equal(5);
    expect(diff.show().toString()).to.be.equal('hello,hi,this,false,true');
    l(diff.show());
  });

  it('aset.sub()', () => {
    let issub1 = Aset.sub(uset, new Aset('hello', 'hi', 'this'))
    expect(issub1).to.be.true;

    let issub2 = Aset.sub(uset, new Aset('hello', 'hi', 'this', 777))
    expect(issub2).to.be.false;

    let issub3 = Aset.sub(uset, new Aset(1, 3, 'hello', 11, 22, 'hi', 'this', false, true))
    expect(issub3).to.be.true;

    let issub4 = Aset.sub(uset, new Aset(8787));
    expect(issub4).to.be.false;
  });

  it('aset.keys()/values()/entries()', () => {
    l(uset.keys());

    l(uset.values());

    l(uset.entries());

  });
});
