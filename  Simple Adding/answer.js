// Question
// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

// My answer
function SimpleAdding(num) {
  // code goes here
  let recursive_adding = (num) => {
        if ( num === 1 ) {
            return 1
        }
        return num + recursive_adding(num - 1)
  }
  return recursive_adding(num)
}

// Their answer
// The sum of the first N natural numbers is equal to n(n+1)/2 (see proof and why this is so).
function SimpleAdding(num) {

  return (num*(num+1))/2;

}
// Using for loop
function SimpleAdding(num) {

  var answer = 0;

  // loop from 1 to num
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  }

  return answer;

}
