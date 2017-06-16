//Hash Tables are a table of predetermined length in which each of the cells of the table ("buckets") holds a piece of data which has a key associated w/ a value ie. {key:pizza, value:"$2.25"} . They are very powerful data structures because they provide us with constant time O(1) lookup and insertion + lookup runtime (very fast)(unless, however a bucket has a collision (two pieces of info in the same bucket), in which case the runtime is 'nearly' 0(1) ).


//practical uses include email provider storing addresses or users of an application. However, since the insertion of data is done in somewhat of a random way, data doesn't store references to other pieces of data in the data structure (although it can be added if you add reference properties on their nodes)

funtion HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

//takes in a string (they key property of one of our nodes) and hash it into a number that corresponds with one of the buckets in our hash table (where we will end up putting our node)
HashTable.proptype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}

//takes in a key and value pair, turn them into a hash node, and insert that node into the correct bucket in our hash table. also updates info if they already exist in hash table
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value)
  }
  else if (this.buckets[index].key == key) {
      this.buckets[index].value = value
  }
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode = currentNode.next
        currentNode.next.value = value
        return;
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value);
  }
}

//takes in a key and returns the value
HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    if (!this.buckets[index]) return null
    else{
      var currentNode = this.buckets[index];
      while(currentNode) {
        if (currentNode.key === key) return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
    }
}

//returns an array of all the hash nodes in the hash table
HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0 ; while i < this.numBuckets; i++) {
      var currentNode = this.buckets[i]
      while (currentNode) {
        allNodes.push(currentNode)
        currentNode = currentNode.next;
      }
  }
  return allNodes;
}


//tests to demonstrate functionality
var myHT = new HashTable(30);
console.log(myHT);
console.log(myHT.hash('becca'));
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
console.log(myHT.buckets)
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
console.log(myHT.buckets)
console.log(myHT.get('dean'))
myHT.insert('joe', 'joey@facebook.com')
myHT.insert('sam', 'sammy@twitter.com')
console.log(myHT.retrieveAll())

//charCodeAt() --> gives us the unicode value of a string, takes argument of an index # so it knows which letter to lookup the numeric value for
