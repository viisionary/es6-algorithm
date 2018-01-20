import {Graph, Ver} from '../../src/graph/graph.js';
import chai from 'chai'

let expect = chai.expect;
let graph = Reflect.construct(Graph, ['5']);
let ver = Reflect.construct(Ver, []);

describe('graph/graph.js::Graph', () => {
  it('图和图算法测试：', () => {
    graph.addEdge(0,1);
    graph.addEdge(0,2);
    graph.addEdge(1,3);
    graph.addEdge(2,4);

    console.log('邻接表：', graph.showGraph());
    console.log('\n深度优先搜索所有顶点的路径：');
    console.log('\n从顶点0开始的路径：');
    graph.marked = [];
    graph.dfs(0);
    console.log('\n从顶点1开始的路径：');
    graph.marked = [];
    graph.dfs(1);
    console.log('\n从顶点2开始的路径：');
    graph.marked = [];
    graph.dfs(2);
    console.log('\n从顶点3开始的路径：');
    graph.marked = [];
    graph.dfs(3);
    console.log('\n从顶点4开始的路径：');
    graph.marked = [];
    graph.dfs(4);

    console.log('\n广度优先搜索所有顶点的路径：');
    console.log('******************');
    console.log('\n从顶点0开始的路径：');
    graph.marked = [];
    graph.edgeTo = [];
    graph.bfs(0);
    console.log('同时得到路径表：');
    console.log(graph.edgeTo.toString());
    console.log('对路径表进行转换后得到 0->4 的最短路径为：');
    console.log(graph.pathTo(0, 4).reverse());
    console.log('对路径表进行转换后得到 0->3 的最短路径为：');
    console.log(graph.pathTo(0, 3).reverse());
    console.log('对路径表进行转换后得到 0->2 的最短路径为：');
    console.log(graph.pathTo(0, 2).reverse());
    console.log('对路径表进行转换后得到 0->1 的最短路径为：');
    console.log(graph.pathTo(0, 1).reverse());
    console.log('对路径表进行转换后得到 3->1 的最短路径为：');


    console.log('******************');
    console.log('\n从顶点1开始的路径：');
    graph.marked = [];
    graph.edgeTo = [];
    graph.bfs(1);
    console.log('同时得到路径表：');
    console.log(graph.edgeTo.toString());
    console.log('对路径表进行转换后得到 1->3 的最短路径为：');
    console.log(graph.pathTo(1, 3).reverse());
    console.log('对路径表进行转换后得到 1->0 的最短路径为：');
    console.log(graph.pathTo(1, 0).reverse());
    console.log('对路径表进行转换后得到 1->2 的最短路径为：');
    console.log(graph.pathTo(1, 2).reverse());
    console.log('对路径表进行转换后得到 1->4 的最短路径为：');
    console.log(graph.pathTo(1, 4).reverse());

    console.log('******************');
    console.log('\n从顶点2开始的路径：');
    graph.marked = [];
    graph.edgeTo = [];
    graph.bfs(2);
    console.log('同时得到路径表：');
    console.log(graph.edgeTo.toString());
    console.log('对路径表进行转换后得到 2->4 的最短路径为：');
    console.log(graph.pathTo(2, 4).reverse());
    console.log('对路径表进行转换后得到 2->0 的最短路径为：');
    console.log(graph.pathTo(2, 0).reverse());
    console.log('对路径表进行转换后得到 2->3 的最短路径为：');
    console.log(graph.pathTo(2, 3).reverse());
    console.log('对路径表进行转换后得到 2->1 的最短路径为：');
    console.log(graph.pathTo(2, 1).reverse());

    console.log('******************');
    console.log('\n从顶点3开始的路径：');
    graph.marked = [];
    graph.edgeTo = [];
    graph.bfs(3);
    console.log('同时得到路径表：');
    console.log(graph.edgeTo.toString());
    console.log('对路径表进行转换后得到 3->1 的最短路径为：');
    console.log(graph.pathTo(3, 1).reverse());
    console.log('对路径表进行转换后得到 3->0 的最短路径为：');
    console.log(graph.pathTo(3, 0).reverse());
    console.log('对路径表进行转换后得到 3->2 的最短路径为：');
    console.log(graph.pathTo(3, 2).reverse());
    console.log('对路径表进行转换后得到 3->4 的最短路径为：');
    console.log(graph.pathTo(3, 4).reverse());

    console.log('******************');
    console.log('\n从顶点4开始的路径：');
    graph.marked = [];
    graph.edgeTo = [];
    graph.bfs(4);
    console.log('同时得到路径表：');
    console.log(graph.edgeTo.toString());
    console.log('对路径表进行转换后得到 4->2 的最短路径为：');
    console.log(graph.pathTo(4, 2).reverse());
    console.log('对路径表进行转换后得到 4->0 的最短路径为：');
    console.log(graph.pathTo(4, 0).reverse());
    console.log('对路径表进行转换后得到 4->1 的最短路径为：');
    console.log(graph.pathTo(4, 1).reverse());
    console.log('对路径表进行转换后得到 4->3 的最短路径为：');
    console.log(graph.pathTo(4, 3).reverse());
  });
});
