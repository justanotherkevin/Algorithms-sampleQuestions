## A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.

---

The problem have to deal with finding the optimal 1st drop.  
The number must be large but not go over the limit. By not going over the limit you can reuse the 1st egg.

The question can be reworded into: guess my number without going over the number twice.  
you can guess less, but not over.

---

### binary pproach

We could drop the first egg halfway up the building at the 50th floor. If the egg doesn't break, we can try the 75th floor next.  
 _worst case number of total drops?_
We'd drop the first egg from the 50th floor, and then we'd have to drop the second egg from every floor from 1 to 49, for a total of **50 drops.**

---

### min-max first to second drop

we could skip 10 floors each time. The worst case would again be floor 98 or 99, but we'd only drop the first egg 10 times and the second egg 9 times, for a total of **19 drops!**

---

1. We want to skip as few floors as possible the first time we drop an egg, so if our first egg breaks right away we don't have a lot of floors to drop our second egg from.
2. We always want to be able to reduce the number of floors we're skipping by one. We don't want to get towards the top and not be able to skip any floors any more.


To be able to decrease the number of floors we skip by one every time we move up, and to minimize the number of floors we skip the first time, we want to end up skipping just one floor at the very top. Can we model this with an equation?


 **triangular series.**
 ```
   // n is 8
1, 2, 3, 4, 5, 6, 7, 8
```
to find the sum:  
Take the example above. Notice that if we add the first and last numbers together, and then add the second and second-to-last numbers together, they have the same sum! This happens with every pair of numbers until we reach the middle. If we add up all the pairs of numbers, we get:  

```
  1 + 8 = 9
2 + 7 = 9
3 + 6 = 9
4 + 5 = 9
```

```
sum = ( n + 1 ) * (n / 2)
```


This triangular series ↴ reduces to n * (n+1) / 2 = 100n∗(n+1)/2=100 which solves to give n = 13.651n=13.651

For example:
```
  Highest floor an egg won't break from
13

Floors we drop first egg from
14

Floors we drop second egg from
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

Total number of drops
14
```
```

  Highest floor an egg won't break from
98

Floors we drop first egg from
14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99

Floors we drop second egg from
96, 97, 98

Total number of drops
14
```