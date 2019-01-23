class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while (true) {
      // do it infinity; untill break or return
      if (value < currentNode.value) {
        // inset on the left of currentNode
        if (currentNode.left === null) {
          // check if currentNode have a left
          // if theres no left
          currentNode.left = new BST(value);
          break;
        } else {
          // there is a left of currentNode
          currentNode = currentNode.left;
          // then continue the while loop
        }
      } else {
        // value > currentNode.value insert to the right
        if (currentNode.right === null) {
          // check if currentNode have a right
          // if theres no right
          currentNode.right = new BST(value);
          break;
        } else {
          // there is a right of currentNode
          currentNode = currentNode.right;
          // then continue the while loop
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;

    while (currentNode.value) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        // when currentNode.value === value
        return true;
      }
    }
    return false;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    let parentNode;
    // find the node then remove it.
    while (currentNode) {
      // if node.val is < val => node= node.right
      // if node.val is > val => node= node.left
      if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // when currentNode.val === val; found the target node
        // find smallest from right subtree 
        
      }
    }
    return this;
  }
}
