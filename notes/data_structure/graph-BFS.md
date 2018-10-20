**Breadth-first search (BFS)** is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

[geeksforgeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)  
[github](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search)  
___ 
Fundamentally, the difference between DFS and BFS is that with a DFS you push the children of the current node onto a stack, so they will be popped and processed before everything else, while for BFS you push the children onto the end of a queue, so they will be popped and processed after everything else.

DFS is easy to implement recursively because you can use the call stack as the stack. You can't do that with BFS, because you need a queue. Just to make the similarity clear, lets convert your DFS to an iterative implementation first:
```
//DFS
Tree.prototype.traverse = function (callback) {
  var stack=[this];
  var n;

  while(stack.length>0) {

    n = stack.pop();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = n.children.length-1; i>=0; i--) {
       stack.push(n.children[i]);
    }
  }
};
```
```
And now BFS

//BFS
Tree.prototype.traverse = function (callback) {
  var queue=[this];
  var n;

  while(queue.length>0) {

    n = queue.shift();
    callback(n.value);

    if (!n.children) {
      continue;
    }

    for (var i = 0; i< n.children.length; i++) {
       queue.push(n.children[i]);
    }
  }
};
```
___ 




Advantages:

A BFS will find the shortest path between the starting point and any other reachable node. A depth-first search will not necessarily find the shortest path.
Disadvantages

A BFS on a binary tree generally requires more memory than a DFS.