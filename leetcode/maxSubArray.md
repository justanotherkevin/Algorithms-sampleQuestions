## find max sub array

brute force:

two pointer/ tracker

1. maxSum
2. tempMax

run a double loop, take the sum the inner loop.

- on each inner loop compare to the current max, update if need be
- the reason is that the current iterating number can be a negative, if so it will lower the current sum.
  - However, if the next number is greater then it can compensate for the current negative.

```
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

getMaxSubSum([1,-2,3,4,-5,6])
```

``` 

```
