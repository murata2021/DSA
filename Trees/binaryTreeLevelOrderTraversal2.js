//leetcode 107 Binary Tree Level Order Traveral 2

//Given the root of a binary tree, return the bottom-up level order traversal
//of its nodes' values

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
root.right.right.right = new TreeNode(38);


const levelOrderBottom = (root) => {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {

    let len=queue.length
    result.push(queue.map(node=>node.val))

    while(len>0){
        let currNode=queue.shift()
        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
        len--
    }
  }

  return result.reverse()
};

console.log(levelOrderBottom(root))
