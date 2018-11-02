## Lowest common ancestor

```
This tree is:
head1 = 0
       / \
      1   2
     /\   /\
    3  4 5  6
```

```
head2 = 5
      /   \
      1     4
    /\    / \
    3  8  9  2
  /\
  6  7
```

```
# lca(head1, 1, 5) should return 0
# lca(head1, 3, 1) should return 1
# lca(head1, 1, 4) should return 1
# lca(head1, 0, 5) should return 0
# lca(head2, 4, 7) should return 5
# lca(head2, 3, 3) should return 3
# lca(head2, 8, 7) should return 1
# lca(head2, 3, 0) should return None (0 does not exist in the tree)
```

when its doing tree on a interview you need to pick either two thing.

1. simplicity
2. efficiency

because the tree is not always sorted, we have to assume the worst. The run time would be O(n)

path_to_x(node, x)  
=> ica(head, 8, 7)

expect path_to_x(head, 7) => 5,1,3,7  
time: O(n); space: O(log n)

expect path_to_x(head, 8) => 5,1,8  
time: O(n); space: O(log n)

find the last connom, would be 1

**this solution would be simple, but hte trade off is that there are some repeting computation**  
for example, both run the computation results for `5, 1`

---

## find the most frequently occuring item in an array

test = [1, 3, 1, 3, 2, 1]


## find common numbers in two sorted array 
a = [1, 3, 4, 6, 7, 9]
b = [1, 2, 4, 5, 9, 10]


---
|  
|  
|  

## ans.

### find the most frequently occuring item in an array;

-  test =[1, 3, 1, 3, 2, 1]  
  generate a hash obj  
  iterate over array, if num in hash, += 1 else hase[num] = 1;  
  compare currentmMax wiith hash[num]. if currentMax = hash[num] > currentMax ? hash[num]


### find common numbers in two array
a = [1, 3, 4, 6, 7, 9]
b = [1, 2, 4, 5, 9, 10]

bc its sorted...  
pointerA = 0  
pointerB = 0  
results = []  

loop through longer array or 
while pointerA < arrA.length && pointerB < arrB..length
find if arrA[pointerA] === arrB[pointerB] 
add arrA[pointerA], pointerA +=1, pointerB +=1

while iterating, if arrA[pointerA] > arrB[pointerB] pointerB += 1
- because arr is sorterd, 