

// Node class
function Node(val) {
  this.value = val;
  this.next= null;
}


// Linked List wrapper class
function linkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

// Insertion Method  
  this.insert = (newNode) => {

    // if the list is empty, just set both pointers equal to the new Node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else { // else we're inserting from the end. just set the tail and the tails next
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increase the length since we deleted
    this.length += 1;

  }

  // Search Method
  this.search = (value) => {

    // we need a current pointer referring to the head of the LinkedList
    let current = this.head;

    // recursive helper function passes in the next node as we recurse
    let recHelper = (node, value) => {

      //base case we reach the end
      if (node === null) {
        return false;
      }
  
      //base cae we found the value
      if(node.value === value){
        return true;
      }  
      //recursive step: recurse to the next node in the list
      return recHelper(node.next,value);
    }

    // invoke and return the function
    return recHelper(current,value);
  }


  // iterative version of the above search method
  this.searchIterative = (value) => {

    // we still need a head
    let current = this.head;

    // loop through the linkedlist until we reach the end
    while (current != null) {

      //if we found the value, return
      if( current.value === value) {
        return true;
      }

      //update the current
      current = current.next;
    }
 
    //welp. we made it to the end. return false
    return false;
  }

  // Delete Method
  this.delete = (val) => {
    // if the head is what we're deleting just delete and update the pointer
    if(this.head.value === val){
      this.head = this.head.next;
    } 

    // else we need to traverse the rest of the linked list
    else{

      // we need two pointers to keep track of our current node and our next node

      let prevNode = this.head;
      let currNode = this.head.next;

      //loop until we hit the end of the list

      while(currNode) {

        //if we found the value
        if (currNode.value === val) {
          // if we found the value at the END of the list, we also need to set the tail
          if(currNode.next === null) {
            this.tail = prevNode;
          }

          // fix the pointers
          prevNode.next = currNode.next;
          currNode.next = null;
          break; //break out of the loop
        } 

        // move forward in the list
        prevNode = currNode;
        currNode = currNode.next;
        
      }
    }

    // return the whole linkedlist
    return this.head;
    
  }

  
}


// Testing

// let linkedlist = new linkedList();
// let node1 = new Node(1);
// let node2= new Node(2);
// let node3 = new Node(3);

// linkedlist.insert(node1);
// linkedlist.insert(node2);
// linkedlist.insert(node3);

// console.log(linkedlist.delete(2));

// let current = linkedlist.head;

