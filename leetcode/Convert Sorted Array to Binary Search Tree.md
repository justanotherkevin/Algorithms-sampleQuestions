
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.  

**example**
```
function([1,2,3,4,5,6,7,8]) => [4,2,6,1,3,5,7,null,null,null,null,null,null,null,8]
function([1,2,3,4]) => [2,1,3,null,null,null,4]
```
read more about it here :
https://en.wikipedia.org/wiki/Binary_search_tree

**Javascripts solution**
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return generate(nums, 0, nums.length -1)
};

var generate = function(nums, start, end){

    if(start > end){
        return null;
    }
    var midIndex = start + parseInt((end - start)/2);
    var midVal = nums[midIndex];

    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex-1);
    node.right = generate(nums, midIndex+1, end);

    return node;
}
```
