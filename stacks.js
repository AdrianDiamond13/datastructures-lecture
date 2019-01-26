

// Using arrays as our stack
function Stack() {

  // set the initial array and set the height to zero
  this.stack =[];
  this.height = 0;


  // insertion method
  this.push = (item) => { 
    this.stack.push(item);
    this.height +=1;

  }

  // pop method
  this.pop = () => {
    if (this.stack.length > 0) {
       this.height -= 1;
       return this.stack.pop();
    }

  }

  // top method (get the value at the top of the stack)
  this.top = () => {

    if (this.stack.length) {
      return this.stack [this.stack.length - 1]
    } else {
        return 0;
      };

  }

};


// Using Objects as our stack

// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }

// Stack.prototype.push = function(value) {
//   let top = this.index;
//   this.storage[top] = value;
//   this.index += 1;
//   return this.index;


// };

// Stack.prototype.pop = function() {
//   if(this.index === 0){
//     return undefined;
//   }
//   this.index = this.index -1
//   let retval = this.storage[this.index];
//   delete this.storage[this.index];
//   return retval;

// };


// Testing
// stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.pop();
// console.log(stack.top());
// stack.push(4);
// console.log(stack.stack);

