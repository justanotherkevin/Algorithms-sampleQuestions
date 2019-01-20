/* 
1. Find a “pivot” item in the array. This item is the basis for comparison for a single round.
2. Start a pointer (the left pointer) at the first item in the array.
3. Start a pointer (the right pointer) at the last item in the array.
4. While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
5. While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
6. If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
7. Move the left pointer to the right by one and the right pointer to the left by one.
8. If the left pointer and right pointer don’t meet, go to step 1.

https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
https://www.kirupa.com/sorts/quicksort.htm
*/

let example = [5,4,2,1,4,5,7,8]


let swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {

  var pivotIndex;
  left = left || 0; 
  right = right || items.length -1; 
  if (items.length > 1) {

      pivotIndex = partition(items, left, right);

      if (left < pivotIndex - 1) {
          quickSort(items, left, pivotIndex - 1);
      }

      if (pivotIndex < right) {
          quickSort(items, pivotIndex, right);
      }

  }

  return items;
}

console.log( quickSort(example) );

// [5,4,2,1,4,5,7,8] , 0 , 7 

// 0 to 7  


