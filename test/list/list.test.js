import List from '../../src/list/list.js';
import chai from 'chai'

let expect = chai.expect;
let list = Reflect.construct(List, []);
let l = console.log.bind(console);

describe('list/list.js::List', () => {
  it('list.append() = -1', () =>
    expect(list.append()).to.be.equal(-1)
  );
  it('list.append(undefined) = -1', () =>
    expect(list.append(undefined)).to.be.equal(-1)
  );
  it('list.append(null) = -1', () =>
    expect(list.append(null)).to.be.equal(-1)
  );
  it('list.append(NaN) = -1', () =>
    expect(list.append(NaN)).to.be.equal(-1)
  );
  it('list.append(1, 2, 3, 4, 5) = 5', () =>
    expect(list.append(1, 2, 3, 4, 5)).to.be.equal(5)
  );
  it('list.length() = 5', () =>
    expect(list.length()).to.be.equal(5)
  );
  it('list.toString() = 1,2,3,4,5', () =>
    expect(list.toString()).to.be.equal('1,2,3,4,5')
  );
  it('list.find(3) = 2', () =>
    expect(list.find(3)).to.be.equal(2)
  );
  it('list.remove(3) = 2', () =>
    expect(list.remove(3)).to.be.equal(2)
  );
  it('list.length() = 4', () => {
    expect(list.length()).to.be.equal(4)
  });
  it('list.contains(2) = true', () => {
    expect(list.contains(2)).to.be.true
  });
  it('list.contains(222) = false', () => {
    expect(list.contains(222)).to.not.be.true
  });
  it('...list = 1', () => {
    expect(...list).to.be.equal(1)
  });
  it('list.front() = 1', () => {
    list.front();
    expect(list.displayCurrentElement()).to.be.equal(1)
  });
  it('list.prev() = 1', () => {
    list.prev();
    expect(list.displayCurrentElement()).to.be.equal(1)
  });
  it('list.end() = 5', () => {
    list.end();
    expect(list.displayCurrentElement()).to.be.equal(5)
  });
  it('list.next() = 5', () => {
    list.next();
    expect(list.displayCurrentElement()).to.be.equal(5)
  });
  it('list.current() = 5', () => {
    list.current();
    expect(list.displayCurrentElement()).to.be.equal(5)
  });
  it('list.insert(222, 2) = 1', () => {
    expect(list.insert(2, 222)).to.be.equal(1)
    expect(list.toString()).to.be.equal('1,222,2,4,5')
  });
  it('list.keys(),values(),entries()', () => {
    expect(list.keys().toString()).to.be.equal('0,1,2,3,4')
    expect(list.values().toString()).to.be.equal('1,222,2,4,5')
    expect(list.entries().toString()).to.be.equal('0,1,1,222,2,2,3,4,4,5')
  });


});
