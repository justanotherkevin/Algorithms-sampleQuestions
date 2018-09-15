# This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

# solution 
```
const test = [1, 2, 3, 4, 5]
```
## 1. brute force
```
let answer = []
for (let i = 0; i< test.length; i++) {
  for (let j = 0 ; j<test.length; j++){
    console.log(i,j,answer[i], answer)
    if(answer[i]===undefined){
      answer[i]=1
    }
    if ( j!=i ) {
      answer[i]=answer[i]*test[j]
    }
  }
}
console.log(answer)
```
```
let answer = [] 
for (let i=0;i<test.length;i++){
    answer.push(test.filter( num => num != test[i]).reduce( (sum,num) => (sum*num)))
}
```
## 2. simple one loop
```
let answer = []
let total = test.reduce( (sum,num) => (sum*num))
for (let i = 0; i<test.length; i++ ) {
  answer.push( total/test[i] )
}
console.log(answer)
```
## 3. recursive 
```
function multipleSum(arr, i=0, answer=[], total=0) {
  if ( i === (arr.length - 1) ) {
    return answer
  }
  if( total ===0 ) total = arr.reduce((sum,num) => (sum*num))
  answer.push(total/arr[i])
  i++

  return multipleSum(arr, i, answer, total)
}
console.log(multipleSum(test))
```
## 4. product of before and after index 

