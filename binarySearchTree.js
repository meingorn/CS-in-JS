//A binary search tree is a collection of nodes that are connected together in a certain way. Parent nodes are connected via left nodes and right child nodes similar to in a linked list. Each node is actually a binary search tree in itself (nodes have root nodes and children nodes)
//binary search trees are often used to search through data, also very fast at inserting data O(log n). they are most performant when they are balanced(ie. not having a structure of mostly right connections). good for dictionary, phone book, users. 

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var bst = new BST(50);

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right.) return false;
    else return this.right.contains(value;)
  }
}

//Depth First Traversal - start from top of tree, following each branch to the bottom

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

//test this in the console to see difference in orders/processing
bst.depthFirstTraversal(log, 'post-order');

function log(value) {
  console.log(value);
}

//Breadth First Traversal - start from top going across each level before moving downwards
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this]; //this refers to root node of binary search tree
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

//test this in the console to see the order of processing
function log(node) {
  console.log(node.value);
}
bst.breadthFirstTraversal(log);

//get min and max values in tree
BST.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal();
  else return this.value;
}

BST.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal();
  else return this.value;
}
