/**
 * 用来表示节点
 */
export class Ver {
  constructor(label) {
    this.label = label;
    this.visited = false;
  }
}



/**
 * 图类
 */
export class Graph {

  /**
   * 构造函数
   */
  constructor(verCount) {
    // 顶点
    this.verCount = verCount;

    // 总边数
    this.edges = 0;

    // 邻接表:存储为由顶点的相邻顶点列表构成的数组
    // 另一种表示图边的方法被称为邻接矩阵。它是一个二维数组，
    // 其中的元素表示两个顶点之间是否有一条边

    this.vers = [];

    // 初始化邻接表为二维数组
    for(let i = 0; i < this.verCount; i++) {
      this.vers[i] = [];
    }

    // 用来记录某个顶点是否被访问过
    this.marked = [];

    // 用来保存最短路径计算时候产生的结果
    this.edgeTo = []

  }


  /**
   * 增加边
   * @param a
   * @param b
   */
  addEdge(a, b) {
    this.vers[a].push(b);
    this.vers[b].push(a);
    this.edges++;
  }


  /**
   * 显示图
   * 注意：有冗余(不代表没作用)，一条边会保存到表里两次
   */
  showGraph() {
    let tempstr = '';
    let putstr = '';
    for (let i = 0; i < this.verCount; ++i) {
      putstr += '\n' + i + ' -> ';
      tempstr = this.vers[i];
      for (let j = 0; j < this.verCount; ++j) {
        if (tempstr[j] !== undefined) {
          putstr += tempstr[j] + ' ';
        }
      }
      tempstr = '';
    }
    return putstr;
  }


  /**
   * 深度优先搜索: 类似垂直切字段到库/表, 记录数相同
   * 不是在搜索特定的路径，而是通过搜索来查看在图中有哪些路径可以选择
   * 访问一个没有访问过的顶点，将它标记为已访问，再递归地
   * 去访问在初始顶点的邻接表中其他没有访问过的顶点
   * @param v
   */
  dfs(v) {
    let tempstr;
    this.marked[v] = true;
    if (this.vers[v] !== undefined) {
      console.log(v);
      tempstr = this.vers[v];
    }
    for(let w in tempstr) {
      if (!this.marked[tempstr[w]]) {
        this.dfs(tempstr[w]);
      }
    }
  }



  /**
   * 广度优先搜索: 类似水平切记录到库/表，列数即：字段数相同
   * 从第一个顶点开始，尝试访问尽可能靠近它的顶点
   * 逐层移动的，首先检查最靠近第一个顶点的层，再逐渐向下移动到离起始顶点最远的层：
   * (1) 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
   * (2) 从图中取出下一个顶点 v ，添加到已访问的顶点列表；
   * (3) 将所有与 v 相邻的未访问顶点添加到队列
   * @param v
   */
  bfs(s) {
    let tempstr;
    let queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
      let v = queue.shift(); // 从队首移除
      if (v !== undefined) {
        console.log(v);
      }
      tempstr = this.vers[v];
      for(let w in tempstr) {
        if (!this.marked[tempstr[w]]) {
          this.edgeTo[tempstr[w]] = v;
          this.marked[tempstr[w]] = true;
          queue.push(tempstr[w]);
        }
      }
    }
  }


  /**
   * 在使用广度优先搜索后，根据 edgeTo 来确定到某个顶点的最短路径
   * @param s
   * @param v
   * @returns {*}
   */
  pathTo(s, v) {
    if (!this.marked[v]) {
      return undefined;
    }
    let path = [];
    for (let i = v; i != s; i = this.edgeTo[i]) {
      if (i === undefined) {
        break;
      }
      path.push(i);
    }
    path.push(s);
    return path;
  }

}
