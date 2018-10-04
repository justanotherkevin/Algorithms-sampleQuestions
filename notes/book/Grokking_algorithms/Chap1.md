# summary

Chapter 1—You’ll learn your first practical algorithm: binary search. You also learn to analyze the speed of an algorithm using Big O notation. Big O notation is used throughout the book to analyze how slow or fast an algorithm is.

---

Talks about binary search:  
 In general, for any list of n, binary search will take `log(base 2) * n === log(n)` steps to run in the worst case.


2^1 = 2  
2^2 = 4  
2^3 = 8  
2^4 = 16  
2^5 = 32  
2^6 = 64  
2^7 = 128  
2^8 = 256  
2^9 = 512  
2^10 = 1024  
2^11 = 2048  
2^12 = 4096  

Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
=> 7 
log(base 2) * n === 128; n => 7 

- Big O notation tells you how fast an algorithm is.
- The run time in Big O notation is O(n).
- Big O doesn’t tell you the speed in seconds. Big O notation lets you compare the number of operations. It tells you **how fast the algorithm grows**.

```

const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null
```