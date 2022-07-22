//Leetcode 102 Binary Tree Level Order Traversal

//Given the root of a binary tree, return the level order traversal of its nodes' values

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.left.left=new TreeNode(32)


//TIME COMPLEXITY O(N) we touch every element once
//SPACE COMPLEXITY O(N) we use scaling data structures
const levelOrder = (root) => {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let len = queue.length;

    result.push(queue.map((node) => node.val)); //all it does is take a copy of whatever in queue and push their val to result array

    while (len>0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--
    }
  }
  return result
};

console.log(levelOrder(root))
