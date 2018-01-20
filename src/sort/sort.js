export default class Sort {
  constructor(data = []) {
    this.data = [];
  }

  toString() {
    return this.data.toString();
  }

  adSort(fn) {
    this.data.sort(fn);
  }

  /**
   * 冒泡排序 / 速度最慢 / 容易实现
   * 前后元素比较后交换位置, 互换次数较多
   * 1000以内看不出差异
   * 10000以上最慢, 需多次取样，测试
   */
  bubbleSort() {
    let temp;
    let numElements = this.data.length;
    console.log('基本排序：冒泡排序的执行过程：');
    for ( let outer = numElements; outer >= 2; --outer) {
      for ( let inner = 0; inner <= outer - 1; ++inner ) {
        if (this.data[inner] > this.data[inner + 1]) {
          (
            [this.data[inner], this.data[inner + 1]] =
            [this.data[inner + 1], this.data[inner]]
          );
        }
      }
      console.log(this.data.toString());
    }
  }

  /**
   * 选择排序, 互换次数少, 依次找出最小和前面的互换
   * 较难实现
   * 1000以内看不出差异
   * 10000以上较快, 需多次取样，测试
   */
  selectSort() {
    let min, temp;
    console.log('\n\n基本排序：选择排序的执行过程：');
    for (let outer = 0; outer <= this.data.length-2; ++outer) {
      min = outer;
      for (let inner = outer + 1;
           inner <= this.data.length-1; ++inner) {
        if (this.data[inner] < this.data[min]) {
          min = inner;
        }
      }
      (
        [this.data[outer], this.data[min]] =
          [this.data[min], this.data[outer]]
      );
      console.log(this.data.toString());
    }
  }

  /**
   * 插入排序,从第二个开始跟之前的所有比较并挨个移动
   * 难实现
   * 1000以内看不出差异
   * 10000以上最快, 需多次取样，测试
   */

  insertSort() {
    let temp, inner;
    console.log('\n\n基本排序：插入排序的执行过程：');
    for (let outer = 1; outer <= this.data.length - 1; ++outer) {
      temp = this.data[outer];
      inner = outer;
      while (inner > 0 && (this.data[inner - 1] >= temp)) {
        this.data[inner] = this.data[inner - 1];
        --inner;
      }
      this.data[inner] = temp;
      console.log(this.data.toString());
    }
  }

  /**
   * 高级排序: 希尔,类似插入排序, 指定一个依次查询的序列间隔，如：
   * [5, 3, 1] 或者  [701, 301, 132, 57, 23, 10, 4, 1]
   * 难实现, 效率高
   * 1000以内看不出差异
   */

  shellSort() {
    this.gaps = [5, 3, 1];
    console.log('\n\n高级排序：希尔排序的执行过程：');
    for (let g = 0; g < this.gaps.length; ++g) {
      for (let i = this.gaps[g]; i < this.data.length; ++i) {
        let temp = this.data[i];
        let j;
        for (j = i; j >= this.gaps[g] &&
        this.data[j-this.gaps[g]] > temp;
             j -= this.gaps[g]) {
          this.data[j] = this.data[j - this.gaps[g]];
        }
        this.data[j] = temp;
        console.log(this.data.toString());
      }
    }
  }

  /**
   * 高级排序：快速排序
   * (1) 选择一个基准元素，将列表分隔成两个子序列；
   * (2) 对列表重新排序，将所有小于基准值的元素放在基准值的前面，
   *     所有大于基准值的元 素放在基准值的后面；
   * (3) 分别对较小元素的子序列和较大元素的子序列重复步骤 1 和 2
   */

  qSort(list) {
    if (list.length === 0) {
      return [];
    }
    let lesser = [];
    let greater = [];
    let pivot = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] < pivot) {
        lesser.push(list[i]);
      } else {
        greater.push(list[i]);
      }
    }
    return this.qSort(lesser).concat(pivot, this.qSort(greater));
  }

  /**
   * 高级排序：归并排序，两个数组实现挨个插入排序另外一个数组
   * 需要对较大数组排序时候，需要占用一个合并后的大内存空间来存储
   */

  mergeSort() {}


}
