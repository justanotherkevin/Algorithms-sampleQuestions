/* find most frequently occuring item in an array 
[1,2,1,1,3,4,5] => 1
*/
function mostOccuring(array) {
  let obj = {};
  let tempMax = 0
  for ( let num of array ) {
    if ( !obj[num] ) {
      obj[num] = 1;
    } else if ( obj[num] ) {
      obj[num] ++
    }
    if (tempMax < obj[num] ) {
      tempMax = num
    }
  }
  return tempMax
}


/*
the reason behind this is ... 
create a obj that store the key as the num in the array, 

as you iterrate, when the num occurs again, you increment the obj.key vale 

while youre iterating( at each iteration) you check for the max value. 

at the end return the max

=== 
this function run at o(n) time. 
take o(1) space ? 
*/

