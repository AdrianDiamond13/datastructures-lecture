


// Binary Tree constructor
function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;


  // add function adds value to BST
  this.add = (value) => {


    // recursive helper function
    function recurse(bst) {

      //3 BASE CASES

      /* Case 1: if the currenot node value is greater than the value
       * we're trying to insert AND there is a space for us to insert,
       * then insert
       * 
       * Case 2: if the current node is greater and there's
       * something there, this recurse down to the left
       * 
       * Case 3: if the current node is smaller than the value
       * we're trying to insert AND there's space, then insert
       * 
       * Case 4: if the current node and there's something there,
       * then recurse down to the right
       */
      if (bst.value > value && bst.left === null) {
        bst.left = new BinaryTree(value);
      } else if (bst.value > value) {
        recurse(bst.left);
      } else if (bst.value < value && bst.right === null) {
          bst.right = new BinaryTree(value)
      } else if (bst.value < value) {
        recurse(bst.right);
      }

    }

    //return the tree
      recurse(this);

  }


  //find method
  this.find = (item) => {

    function recurse(bst) {

      //base case 1: if we have nowhere else to go, return false

      if(bst === null) {
        return false;
      }

      //base case 2: if we found our value: return true

      if(bst.value === item) {
        return true;

      } 
        //if our current node is greater than the item we're searching, we have to go to the left
       else if (bst.value > item) {
        return recurse(bst.left);

        //if our current node is less than the item we're searching for, we have to go the right
      } else if (bst.value < item) {
        return recurse(bst.right);
      } 


    }

    // call the recurse helper function and return the value

    return recurse(this);


  }



  // inorder traversal traverses the tree recursively
  // and visits nodes in ascending order
  this.inorderTraversal = () => {

    let sorted = [];

    //helper function
    function traverse(bst){
        if(bst){

          //go left as possible
          traverse(bst.left);
          //vist
          sorted.push(bst.value);
          //go right as possible
          traverse(bst.right);
        }
    }


    // traverse the tree
    traverse(this);
    return sorted;
  }
}

// TESTING
// let root = new BinaryTree(10);
// root.add(15);
// root.add(5);
// root.add(20);
// root.add(1);
// root.add(25);

// console.log(root);
// console.log(root.inorderTraversal())
// console.log(root.find(21));