export default class Search {
  /**
   * 构造函数
   * @param data
   * return this
   */
  constructor(data = []) {
    this.data = [];
  }

  /**
   * override 覆盖父 toString() 方法
   */
  toString() {
    return this.data.toString();
  }


  /**
   * 顺序查找，暴力查找, 线性查找,在大数集上效率低
   * * @param data
   * @returns {boolean}
   */
  orderSearch(data) {
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i] === data) {
        return true;
      }
    }
    return false;
  }


  /**
   * 顺序查找优化
   * 将频繁查找的元素移动到前面, 减少寻找次数
   * 8-2 原则
   * 帕累托（Vilfredo Pareto）
   * @param data
   * @returns {string}
   */
  orderPareto(data) {
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i] === data) {
        i > 0 &&
        (
          [this.data[i], this.data[i - 1]] =
          [this.data[i - 1], this.data[i]]
        )
        return i;
      }
    }
    return -1;
  }


  /**
   * 查找最小值
   * @returns {*}
   */
  findMinOne() {
    let min = this.data[0];
    for (let i = 1; i < this.data.length; ++i) {
      if (this.data[i] < min) {
        min = this.data[i];
      }
    }
    return min;
  }


  /**
   * 查找最小值
   * @returns {number}
   */
  findMinTwo() {
    return Math.min(...this.data);
  }


  /**
   * 查找最大值
   * @returns {*}
   */
  findMaxOne() {
    let max = this.data[0];
    for (let i = 1; i < this.data.length; ++i) {
      if (this.data[i] > max) {
        max = this.data[i];
      }
    }
    return max;
  }


  /**
   * 查找最大值
   * @returns {number}
   */
  findMaxTwo() {
    return Math.max(...this.data);
  }


  /**
   * 查找下标
   * @param data
   * @returns {number}
   */
  findIndexOf(data) {
    return this.data.indexOf(data);
  }


  /**
   * 定制查找元素
   * @param fn
   * @returns {*}
   */
  find(fn) {
    return this.data.find(fn);
  }


  /**
   * 定制查找元素下标
   * @param fn
   * @returns {number}
   */
  findIndex(fn) {
    return this.data.findIndex(fn);
  }


  /**
   * 是否包含某个元素
   * @param data
   * @returns {boolean}
   */
  includes(data) {
    return this.data.includes(data);
  }


  /**
   * 二分查找法, 大数集上效率高
   * 注意这个算法只对有序的集合有效
   * @param data
   * @returns {boolean}
   */
  binSearch(data) {
    this.data.sort((a, b) => a - b);
    console.log(this.data);
    let upper = this.data.length-1;
    let lower= 0;
    while (lower <= upper) {
      let mid = Math.floor((upper + lower) / 2);
      console.log(lower, upper, this.data[mid]);
      if (this.data[mid] < data) {
        lower = mid + 1;
      }
      else if (this.data[mid] > data) {
        upper = mid - 1;
      }
      else {
        return mid;
      }
    }
    return false;
  }


  /**
   * 统计重复次数
   * 在二分查找法的基础上进行
   * 思路：相同的数值总是在相邻位置
   * 使用二分查找法找出位置后，分别向左向右寻找相同值，找到break
   * @param data
   * @returns {number}
   */
  binCount(data) {
    let count = 0, p = this.binSearch(data);
    if (p) {
      ++count;
      for (let i = p - 1; i > 0; --i) {
        if (this.data[i] == data) {
          ++count;
        }
        else {
          break;
        }
      }
      for (let i = p + 1; i < this.data.length; ++i) {
        if (this.data[i] == data) {
          ++count;
        }
        else {
          break;
        }
      }
    }
    return count;
  }

}
