//Linked Lists are a good data structure to use in lower level languages that deal with physical memory space because data doesn't have to be stored all together, because each piece of data has a next pointer that references the location of the next piece of data. ato


function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var node1 = new Node(100,'node2', null)


//Linked Lists have constant runtime O(1) for adding and removing nodes to head and tail

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}


//Searching a linked list has linear time compexity O(n), as runtime increases in proportion to the size of the list
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next
  }
}

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}
