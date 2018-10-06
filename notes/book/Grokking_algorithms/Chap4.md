## chapter 4

In this chapter

- You learn about divide-and-conquer. Sometimes you’ll come across a problem that can’t be solved by any algorithm you’ve learned. When a good algorithmist comes across such a problem, they don’t just give up. They have a toolbox full of techniques they use on the problem, trying to come up with a solution. Divide-and-conquer
  is the first general technique you learn.
- You learn about quicksort, an elegant sorting algorithm that’s often used in practice. Quicksort uses divide-and-conquer.

this chapter teachs **quick sort**. runtime **O(n log n)**

First, pick an element from the array. This element is called the pivot.

Now find the elements smaller than the pivot and the elements larger
than the pivot. partitioning.

- Now you have
  • A sub-array of all the numbers less than the pivot
  • The pivot
  • A sub-array of all the numbers greater than the pivot

_If the sub-arrays are sorted, then you can combine the whole thing like this—left array + pivot + right array—and you get a sorted array. In this case, it’s `[10, 15] + [33] + [] = [10, 15, 33]`, which is a sorted array._

1. Pick a pivot.
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Call quicksort recursively on the two sub-arrays.

```
const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
};
```

--- 


## Big O 

Quicksort is unique because its speed depends on the pivot you choose.  
When you write Big O notation like O(n), it really means this.  
** c * n **  
c is some fixed amount of time that your algorithm takes. It’s called the constant.  

But sometimes the constant can make a difference. Quicksort versus merge sort is one example. Quicksort has a smaller constant than merge sort. So if they’re both O(n log n) time, quicksort is faster. And quicksort is faster in practice because it hits the average case way more often than the worst case.