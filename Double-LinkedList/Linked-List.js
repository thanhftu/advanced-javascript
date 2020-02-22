function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};
LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.prev = null;
  else this.head = null;
  return val;
};
LinkedList.prototype.search = function(value) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};
LinkedList.prototype.indexOf = function(value) {
  var currentNode = this.head;
  var indices = [];
  var index = 0;
  while (currentNode) {
    if (currentNode.value === value) {
      indices.push(index);
    }
    currentNode = currentNode.next;
    index++;
  }
  return indices;
};
var ll = new LinkedList();
ll.addToTail(100);
ll.addToTail(101);
ll.addToTail(100);

console.log(ll.indexOf(100));
// var ll=new LinkedList();
// ll.addToHead(100)
// ll.addToHead(99)
// ll.addToHead(77)
// ll.addToHead(7)
// console.log(ll)
