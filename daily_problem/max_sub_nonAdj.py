# this problem by AirBnb
# return largest sum of non-adjacent numbers;
# numbers can be 0 or negative. 
# example [ 2,4,6,2,5] => 13; [2,6,5]
test = [ 2,-4,6,3,5]

def largestSum(arr, test):
  print(arr,test)
  if not arr:
    return 0
  return max( largestSum(arr[1:],'first'), arr[0]+largestSum(arr[2:],'second'))

print (largestSum(test,'test'))

[2,4,6,3,5]
[4,6,3,5]
6,3,5
6,5
5





# def testtest(arr): 
