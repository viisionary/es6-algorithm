import Sort from '../../src/sort/sort.js';
import chai from 'chai'

let expect = chai.expect;
let sort = Reflect.construct(Sort, []);

describe('sort/sort.js::Sort', () => {
  it('sort.bubbleSort()', () => {
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    sort.bubbleSort();
  });
  it('sort.selectSort()', () => {
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    sort.selectSort();
  });
  it('sort.insertSort()', () => {
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    sort.insertSort();
  });
  it('sort.shellSort()', () => {
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    sort.shellSort();
  });
  it('sort.qSort()', () => {
    console.log('\n高级排序：快速排序');
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    let list = sort.qSort(sort.data);
    console.log(list.toString());
  });
  it('sort.adSort()', () => {
    sort.data = [76, 69, 64, 4, 64, 73, 47, 34, 65, 93, 32];
    sort.adSort((a, b) => a - b);
    console.log('\n高阶函数排序定制a-b：\n', sort.toString());
    sort.adSort((a, b) => b - a);
    console.log('高阶函数定制b-a：\n', sort.toString(), '\n');
  });
});
