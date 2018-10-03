This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

---

One of the first two int will always be chosen.  
beause you can't use adjacent number, take the first number and add it to the 3rd. Then compare the sum with the second number.  
reassign the 1st number as the greater, 2nd number as previous 1st plus next number. 
```
given [ 1, 6, 3, 4, 5]
        1  6
           6  4
              6  10
                 10 11
```
then compare and return the greater of num1 vs num2

## in javascript 
```
const test =[1,6,3,4,4,5]

function maxNonAdj(arr) {
  let [num1, num2] = [arr[0],arr[1]] 

  for ( i = 2; i<arr.length; i ++) {
    let temp = (num1+ arr[i]) > num2 ? num1 : num2;
    num1 = temp
    num2 = num1 +arr[i]
  }
  return num1 > num2 ? num1 : num2 
}
maxNonAdj(test)
```

