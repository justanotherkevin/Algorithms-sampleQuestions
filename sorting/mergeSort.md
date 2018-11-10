

1. divide half untill there is only 2; 
2. compare those two and return sorted of the two. 
    - repeat all the way back up




```
var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

function merge(leftArr, rightArr) {
  var sortedArr = [];
  let i = 0, j = 0;

  while ( i < leftArr.length && j < rightArr.length ) {
    let workingMin = Math.min( leftArr[i], rightArr[j] );
    sortedArr.push( workingMin );
    if ( leftArr[i] === workingMin ) {
      i++;
    } else { 
      j++; 
    }
  }
  while ( i < leftArr.length ) {
    sortedArr.push( leftArr[i] );
    i++;
  }
  while ( j < rightArr.length ) {
    sortedArr.push( rightArr[j] );
    j++;
  }
  return sortedArr;
}



function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}


console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));
```