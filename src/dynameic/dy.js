/**
 * 动态规划：递归的替代方案
 */
export default class Dy {

  /**
   * 构造函数
   */
  constructor() {
    this.data = [];
  }

  /**
   * 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
   * 递归算法: 执行效率低下，不能编译为有效率的机器代码
   * @param n
   * @returns {*}
   */

  reFib(n) {
    if (n < 2) {
      return n;
    }
    else {
      return this.reFib(n-1) + this.reFib(n-2);
    }
  }


  /**
   * 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
   * 动态规划: 执行效率高, 递归算法的替代方案
   * 思路：使用一个临时数组来保存中间结果
   * @param n
   * @returns {*}
   */
  dyFib(n) {
    let val = [];
    for (let i = 0; i <= n; ++i) {
      val[i] = 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    else {
      val[1] = 1;
      val[2] = 2;
      for (let i = 3; i <= n; ++i) {
        val[i] = val[i-1] + val[i-2];
      }
      return val[n-1];
    }
  }


  /**
   * 斐波那契数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
   * 迭代方案: 执行效率最高, 递归算法及动态规划的替代方案
   * 思路：不使用数组，使用临时变量即可
   * @param n
   * @returns {*}
   */
  iteratorFib(n) {
    let last = 1;
    let nextLast = 1;
    let result = 1;
    for (let i = 2; i < n; ++i) {
      result = last + nextLast;
      nextLast = last;
      last = result;
    }
    return result;
  }


  /**
   * 贪心算法：找零钱
   * @param n
   * @returns {*}
   */
  makeChange(origAmt) {
    let remainAmt = 0, coins = [];
    // 25美分
    if (origAmt % .25 < origAmt) {
      coins[3] = parseInt(origAmt / .25);
      remainAmt = origAmt % .25;
      origAmt = remainAmt;
    }

    // 10美分
    if (origAmt % .1 < origAmt) {
      coins[2] = parseInt(origAmt / .1);
      remainAmt = origAmt % .1;
      origAmt = remainAmt;
    }

    // 5美分
    if (origAmt % .05 < origAmt) {
      coins[1] = parseInt(origAmt / .05);
      remainAmt = origAmt % .05;
      origAmt = remainAmt;
    }

    // 1美分
    coins[0] = parseInt(origAmt / .01);

    return coins;
  }

}
