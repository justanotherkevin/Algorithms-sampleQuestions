## In this chapter

- We continue the discussion of graphs, and you learn about weighted graphs: a way to assign more or less weight to some edges.
- You learn Dijkstra’s algorithm, which lets you answer “What’s the shortest path to X?” for weighted graphs.
- You learn about cycles in graphs, where Dijkstra’s algorithm doesn’t work.

---

To recap, Dijkstra’s algorithm has four steps:

1. Find the cheapest node. This is the node you can get to in the least amount of time.
2. Check whether there’s a cheaper path to the neighbors of this node. If so, update their costs.
3. Repeat until you’ve done this for every node in the graph.
4. Calculate the final path. (Coming up in the next section!)

---

## Terminology

A graph with weights is called a **weighted graph**. A graph without weights is called an **unweighted graph**.

---

I’ll show you the code first and then walk through it. Here’s the code:

```
Find the lowest-cost node node = find_lowest_cost_node(costs) that you haven’t processed yet.
while node is not None: If you’ve processed all the nodes, this while loop is done. cost = costs[node]
neighbors = graph[node]
for n in neighbors.keys():         Go through all the neighbors of this node.
new_cost = cost + neighbors[n] If it’s cheaper to get to this neighbor if costs[n] > new_cost:         by going through this node ...
       costs[n] = new_cost
parents[n] = node
processed.append(node)         Mark the node as processed.
node = find_lowest_cost_node(costs) Find the next node to process, and loop.
```

That’s Dijkstra’s algorithm in Python! I’ll show you the code for the function later. First, let’s see this find_lowest_cost_node algorithm code in action.
