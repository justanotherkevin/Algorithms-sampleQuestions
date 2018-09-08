# problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

# brute force

```
const possibleSum = (arr, k) => {
  arr.forEach( (ele, i) => {
    arr.forEach( (ele, j) => {
      if ( i != j ) {
        console.log(k - arr[i], arr[j])
        if (k - arr[i] === arr[j]) {
          return true;
        }
      }
    })
  })
  return false
}
console.log(possibleSum(test, 17))


function possibleSum2(arr,k) {
  for( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length; j ++ ) {
      if ( i != j ) {
        if (k - arr[i] === arr[j]) {
          return true
        }
      }
    }
  }
  return false
}
console.log(possibleSum2( test, 17))
```

BigO = O(n^2)  
forEach does not return true although the two functions are the same.

- interesting

# with one pass

```
const test = [10, 15, 3, 7]
function onePass( arr, k ) {
  let obj = {};
  for ( let i = 0; i < arr.length; i ++ ) {
    if ( obj[arr[i]] != undefined ) { return true }
    obj[k-arr[i]] = i
  }
}
onePass( test, 17)
```
