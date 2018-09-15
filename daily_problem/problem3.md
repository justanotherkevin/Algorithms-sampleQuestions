# This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'


# make a node class ? 
```
class Node {
  constructor( val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let test = new Node(1)
test.left = new Node( 2 )
test.right = new Node( 3 )
test.left.left = new Node ( 5 )
console.log(test)
```