import Hash from '../../src/hash/hash.js';
import chai from 'chai'

let expect = chai.expect;
let hash = Reflect.construct(Hash, []);
let l = console.log.bind(console);

describe('hash/hash.js::Hash', () => {
  it('hash.put()', () => {
    hash.put('张小一');
    hash.put('王小二');
    hash.put('李小三');
    hash.put('Jonathan');
    hash.put('Danny');
    hash.put('Mike');
  });
  it('hash.show()', () => {
    l(hash.show().toString());
    expect(hash.show().toString()).to.be.equal('30,张小一,48,李小三,80,Jonathan,82,Mike,110,Danny');
  });
  it('hash.get()', () => {
    expect(hash.get('张小一')).to.be.equal(30);
    expect(hash.get('王小二')).to.be.equal(80);
    expect(hash.get('李小三')).to.be.equal(48);
    expect(hash.get('Jonathan')).to.be.equal(80);
    expect(hash.get('Danny')).to.be.equal(110);
    expect(hash.get('Mike')).to.be.equal(82);
  });
});
