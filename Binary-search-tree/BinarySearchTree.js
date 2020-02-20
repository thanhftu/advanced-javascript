function BTS(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BTS.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BTS(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BTS(value);
    else this.right.insert(value);
  }
};

BTS.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BTS.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

BTS.prototype.breathFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BTS.prototype.getMinvalue = function(iteratorFunc) {
  if (this.left) this.left.getMinvalue(iteratorFunc);
  else iteratorFunc(this.value);
};
BTS.prototype.getMaxvalue = function(iteratorFunc) {
  if (this.right) this.right.getMaxvalue(iteratorFunc);
  else iteratorFunc(this.value);
};
var bts = new BTS(50);
bts.insert(30);
bts.insert(70);
bts.insert(20);
bts.insert(45);
bts.insert(35);
bts.insert(10);
bts.insert(60);
bts.insert(100);
bts.insert(59);
bts.insert(85);
bts.insert(105);

function log(value) {
  console.log(value);
}
bts.getMinvalue(log);
bts.getMaxvalue(log);
// console.log(bts.right.left.left);
// console.log(bts.contains(105));

// bts.depthFirstTraversal(log, "post-order");
// function log(value) {
//   console.log(value);
// }

// function log(node) {
//   console.log(node.value);
// }
// bts.breathFirstTraversal(log);
