//leet code 103 Binary Tree Zigzag Level Order Traversal

//Given the root of a binary tree, return the zigzag level order traversal of its nodes' values

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
//   root.left.left=new TreeNode(32)

const zigzagLevelOrder = (root) => {
  if (!root) return [];

  let queue = [root];
  let result = [];
  let start = 0;

  while (queue.length) {
    let len = queue.length;

    if (start % 2 === 0) {
      result.push(queue.map((node) => node.val));
    } else {
      result.push(queue.map((node) => node.val).reverse());
    }

    start++;

    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

console.log(zigzagLevelOrder(root));
