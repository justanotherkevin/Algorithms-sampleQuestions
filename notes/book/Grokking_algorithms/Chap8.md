
## In this chapter
### greedy strategy

- You learn how to tackle the impossible: problems that have no fast algorithmic solution (NP-complete problems).
- You learn how to identify such problems when you see them, so you don’t waste time trying to find a fast algorithm for them.
- You learn about approximation algorithms, which you can use to find an approximate solution to an NP-complete problem quickly.
- You learn about the greedy strategy, a very simple problem-solving strategy. 


---

ex.  
You want to hold as many classes as possible in this classroom. How do you pick what set of classes to hold, so that you get the biggest set of classes possible?

1. Pick the class that ends the soonest. This is the first class you’ll hold in this classroom.
2. Now, you have to pick a class that starts after the first class. Again, pick the class that ends the soonest. This is the second class you’ll hold.
 
ex.  
uppose you’re a greedy thief. You’re in a store with a knapsack, and there are all these items you can steal.
But you can only take what you can fit in your knapsack. The knapsack can hold 35 pounds.
     

1. Pick the most expensive thing that will fit in your knapsack.
2. Pick the next most expensive thing that will fit in your knapsack. And so on.  

*Except this time, it doesn’t work! For example, suppose there are three items you can steal.*

Your knapsack can hold 35 pounds of items. The stereo system is the most expensive, so you steal that. Now you don’t have space for anything else.  
You got $3,000 worth of goods. But wait! If you’d picked the laptop and the guitar instead, you could have had $3,500 worth of loot!


*sometimes, perfect is the enemy of good. Sometimes all you need is an algorithm that solves the problem pretty well. And that’s where greedy algorithms shine, because they’re simple to write and usually get pretty close.*

--- 

## NP-complete 

- Your algorithm runs quickly with a handful of items but really slows down with more items.
- “All combinations of X” usually point to an NP-complete problem.
- Do you have to calculate “every possible version” of X because you can’t break it down into smaller sub-problems? Might be NP-complete.
- If your problem involves a sequence (such as a sequence of cities, like traveling salesperson), and it’s hard to solve, it might be NP-complete.
- If your problem involves a set (like a set of radio stations) and it’s hard to solve, it might be NP-complete.
- Can you restate your problem as the set-covering problem or the traveling-salesperson problem? Then your problem is definitely NP-complete.
---
## recaps 


- Greedy algorithms optimize locally, hoping to end up with a global optimum.
- NP-complete problems have no known fast solution.
- If you have an NP-complete problem, your best bet is to use an approximation algorithm.
- Greedy algorithms are easy to write and fast to run, so they make good approximation algorithms.