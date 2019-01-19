let example = [5,4,2,1,4,5,7,8]

const sort = ( arr ) => {
  while ( isSorted( arr ) === false ) {
    quickSort( arr )
  }
  return arr 
}
const isSorted = (arr) => {
  for ( let i =0; i< arr.length; i++ ) {
    if ( arr[i] > arr[i+1]) {
      return false 
    }
  }
  return true 
}
const quickSort = (arr) =>  {
  let pivotIndex  = Math.floor ( arr.length /2 );
  let endIndex = arr.length - 1
  let pivotValue = arr[pivotIndex];
  let arrCopy = [...arr]  
  // [5,4,2,1,4,5,7,8] = > [5,4,2,8,4,5,7,1]
  arrCopy[pivotIndex ] = arrCopy[endIndex]
  arrCopy[endIndex] = pivotValue

  let fromLeftLargerThanPivot = (arr) => { 
    for ( let i = 0; i< arr.length; i++ ) {
      if ( arr[i] > pivotValue) {
        return i 
      }
    }
  }
  let fromRightSmallerThanPivot = (arr) => {
    for ( let i = arr.length-2 ;  i >= 0 ; i-- ) {
      if ( arr[i] < pivotValue) {
        return i 
      }
    }
  }
  // [5,4,2,8,4,5,7,1] => 
  let largerThanPivotIndex = fromLeftLargerThanPivot(arrCopy)
  let largerVal = arrCopy[largerThanPivotIndex]
  let smallerThanPivotIndex = fromRightSmallerThanPivot(arrCopy)
  console.log(largerThanPivotIndex, smallerThanPivotIndex)
  
  arrCopy[largerThanPivotIndex] = arrCopy[smallerThanPivotIndex]
  arrCopy[smallerThanPivotIndex] = largerVal

  return arrCopy
}
// let example = [5,4,2,1,4,5,7,8]
console.log( quickSort(example)) 