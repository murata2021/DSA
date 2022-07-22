//leet code 199

//given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
root.left.right.left = new TreeNode(12);

//OPTION 1
// const rightSideView = (root) => {
//   if (!root) return [];

//   let queue = [root];
//   let result = [];

//   while (queue.length) {
//     let len = queue.length;
//     result.push(queue.map((node) => node.val));

//     while (len > 0) {
//       let node = queue.shift();

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//       len--;
//     }
//   }

//   return result.map(node=>node[node.length-1])

// };

//OPTION 2: MORE EFFICIENT IN TERMS OF SPACE COMPLEXITY

const rightSideView = (root) => {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue[len - 1].val);

    while (len > 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      len--;
    }
  }

  return result;
};

console.log(rightSideView(root));
