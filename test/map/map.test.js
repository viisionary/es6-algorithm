import Amap from '../../src/map/map.js';
import chai from 'chai'

let expect = chai.expect;
let amap = Reflect.construct(Amap, []);
let l = console.log.bind(console);

describe('map/map.js::Amap', () => {
  it('amap.set()', () =>{
    expect(amap.set(1, 'a')).to.be.true;
    expect(amap.set(2, 'b')).to.be.true;
    expect(amap.set(3, 'c')).to.be.true;
  });
  it('amap.get()', () => {
    expect(amap.get(1)).to.be.equal('a');
    expect(amap.get(2)).to.be.equal('b');
    expect(amap.get(3)).to.be.equal('c');
  });
  it('amap.size()', () => {
    expect(amap.size()).to.be.equal(3);
  });
  it('amap.showAll()', () => {
    expect(amap.showAll().toString()).to.be.equal('1,a,2,b,3,c');
  });
  it('amap.has()', () => {
    expect(amap.has(1)).to.be.true;
    expect(amap.has(2)).to.be.true;
    expect(amap.has(3)).to.be.true;
  });
  it('amap.delete()', () => {
    expect(amap.set(11, 'a')).to.be.true;
    expect(amap.set(22, 'b')).to.be.true;
    expect(amap.set(33, 'c')).to.be.true;
    expect(amap.showAll().toString()).to.be.equal('1,a,2,b,3,c,11,a,22,b,33,c');
    expect(amap.delete(33)).to.be.true;
    expect(amap.delete(43)).to.be.false;
    expect(amap.showAll().toString()).to.be.equal('1,a,2,b,3,c,11,a,22,b');
  });
  it('amap.keys()/values()/entries()', () => {
    expect(amap.keys().toString()).to.be.equal('1,2,3,11,22')
    expect(amap.values().toString()).to.be.equal('a,b,c,a,b')
    expect(amap.entries().toString()).to.be.equal('1,a,2,b,3,c,11,a,22,b')
  });
  it('amap.sort()', () => {
    let smap = amap.sort();
    expect(smap.showAll().toString()).to.be.equal('22,b,11,a,3,c,2,b,1,a');
  });
  it('amap.clear()', () => {
    expect(amap.size()).to.be.equal(5);
    expect(amap.clear()).to.be.true;
    expect(amap.size()).to.be.equal(0);
    amap.showAll();
    expect(amap.showAll().toString()).to.be.equal('');
  });
});
