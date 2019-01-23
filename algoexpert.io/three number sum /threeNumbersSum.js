//  four sum 

/*
Summary => 
variables ... 
two pointers
two fix val to test ( init at beginning and end )
currentSum : to compare with target
res : to keep track of answers 

This take two "walk"
  1. move left fix vale from 0 to end of array 
  2. move right from end of array to beginning 
  ex. 
    1st itteration : [1,2,3,4,5]
                      -👆  ☝️️  -  left:0 , pA:1, pB:3, right:4
    2nd itteration : [1,2,3,4,5]
                      -  👆☝️️  -  left:0 , pA:2, pB:3, right:4
    when pA exceed pB : walk left index
    2nd itteration : [1,2,3,4,5]
                        -👆☝️️  -  left:1 , pA:2, pB:3, right:4
    now you can't move any index; ( when left + 3 === right )

    now walk right instead of left 
    1st itteration : [1,2,3,4,5]
                      -👆☝️️ -    left:0 , pA:1, pB:2, right:3

When you find a combination === target: save it into res 
*/

const FourSum = (arr,target) => {
  let left =0, right = arr.length -1, pA, pB;
  
  res = []; 
  let cSum; 
  
  while (left + 2 != right ) {
    pA = left +1;
    pB = right -1; 
    while ( pA < pB ) {
      cSum = arr[left] + arr[right] + arr[pA] + arr[pB]; 
      if (cSum === target) {
        res.push( [arr[left], arr[pA], arr[pB], arr[right]])
        pA ++ 
        pB -- 
        pA === pB && (pB--) 
      } 
      if (cSum < target) {
        pA ++ 
      }
      if (cSum > target) {
        pB -- 
      }
    }

    left ++ 
  }

  left = 0; 
  right = arr.length -2 

  while (right - 2 != left ) {
    pA = left +1;
    pB = right -1; 
    while ( pA < pB ) {
      cSum = arr[left] + arr[right] + arr[pA] + arr[pB]; 
      if (cSum === target) {
        res.push( [arr[left], arr[pA], arr[pB], arr[right]])
        pA ++ 
        pB -- 

        pA === pB && (pB--) 
      } 
      if (cSum < target) {
        pA ++ 
      }
      if (cSum > target) {
        pB -- 
      }
    }

    right -- 
  }

  return res

}

console.log(FourSum([1,2,3,4,5], 10 ))

