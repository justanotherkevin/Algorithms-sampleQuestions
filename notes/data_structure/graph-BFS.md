**Breadth-first search (BFS)** is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.

[geeksforgeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)  
[github](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/breadth-first-search)  
___ 
Fundamentally, the difference between DFS and BFS is that with a DFS you push the children of the current node onto a stack, so they will be popped and processed before everything else, while for BFS you push the children onto the end of a queue, so they will be popped and processed after everything else.

DFS is easy to implement recursively because you can use the call stack as the stack. You can't do that with BFS, because you need a queue. Just to make the similarity clear, lets convert your DFS to an iterative implementation first:
```
//DFS
Tree.prototype.traverse = function (callback) {
  // using **stack**, FILO
  var stack=[this];
  var workingNode;

  while(stack.length>0) {

    workingNode = stack.pop(); //take from back of queue
    callback(workingNode.value);

    if (!workingNode.children) {
      // at leaf node;  
    }

    for (var i = workingNode.children.length-1; i>=0; i--) {
       stack.push(workingNode.children[i]);
    }
  }
};

ex. 
            8
          /   \
         1     2
        / \   /  \
      3    5 6    7

iteration | stack 
0           [8]
1           [1,2]
2           [1,6,7]
3           [1,6]
4           [1]
5           [3,5]
6           [3]
  
```
```
And now BFS

//BFS
Tree.prototype.traverse = function (callback) {
  // using **queue**, LIFO
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




**BFS Advantages:**

A BFS will find the shortest path between the starting point and any other reachable node. A depth-first search will not necessarily find the shortest path.
Disadvantages

A BFS on a binary tree generally requires more memory than a DFS.
___

**DFS Advantages:**

Depth-first search on a binary tree generally requires less memory than breadth-first.
Depth-first search can be easily implemented with recursion.
Disadvantages

A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.