## In this chapter
- You learn how to model a network using a new, abstract data structure: graphs.
- You learn breadth-first search, an algorithm you can run on graphs to answer questions like, **“What’s the shortest path to go to X?”**
- You learn about directed versus undirected graphs.
- You learn topological sort, a different kind of sorting algorithm that exposes dependencies between nodes.

The algorithm found that the shortest route to the bridge is three steps long. This type of problem is called a shortest-path problem. The algorithm to solve a shortest-path problem is called breadth-first search.

needs queue for BFS 

When updating queues, I use the terms enqueue and dequeue. You’ll also encoun- ter the terms push and pop. Push is almost always the same thing as enqueue, and pop is almost always the same thing as dequeue.

https://repl.it/@hissho/BFS-non-recurssive 

1. Using an array to queue people to search; 
2. while `searchQueue.length`: keep searching
3. since this is queue, take the first ele from the array, using `Array.shift`
4. check if this person is the person you want
4. add this person's friends into the queue  
5. repeat! until queue is empty 
