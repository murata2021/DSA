//leet code 429 N-ary Tree Level Order Traversal

//Given an n-ary tree, return the level order traversal of its nodes' values

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

let root = new Node(1);

root.children.push(new Node(3, [new Node(5), new Node(6)]));
root.children.push(new Node(2));
root.children.push(new Node(4));

const levelOrder = (root) => {
  if (!root) return [];
  let queue = [root];

  let result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));

    while (len--) {
      let currNode = queue.shift();

      for (let child of currNode.children) {
        queue.push(child);
      }
    }
  }
  return result;
};

console.log(levelOrder(root));
