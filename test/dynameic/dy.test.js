import Dy from '../../src/dynameic/dy.js';
import chai from 'chai'

let expect = chai.expect;
let dy = Reflect.construct(Dy, []);

describe('dynameic/dy.js::Dy', () => {
  // 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
  it('递归/动态规划/贪心算法：', () => {
    expect(dy.reFib(10)).to.be.equal(55);

    // 动态规划斐波那契
    expect(dy.dyFib(10)).to.be.equal(55);

    // 迭代版本的斐波那契数列
    expect(dy.iteratorFib(10)).to.be.equal(55);

    // 贪心算法：找零
    expect(dy.makeChange(0.64).toString()).to.be.equal('4,,1,2');
  });
});
