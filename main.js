// Create a stack from scratch
// **data structures to use**
// 1. array
// 2. top
// 3. maxSize
// **create 3 functions**
// 1. push(x)
// 2. pop()
// 3. peek()

let stack = [];
let top = -1;
let maxSize = 4;

push(6)
push(3)
peek()
pop()
push(9)
peek()

function push(ele){
  if(isFull() == true){
    console.log("Overflow");
  }else{
    top++;
    stack[top]=ele;
  } 
}

function isFull(){
  if(top==maxSize-1){
    return true;
  }else{
    return false;
  }
}
function peek(){
  if(isEmpty() == true){
    console.log("Underflow")
  }else{
    console.log(stack[top])
  }
}
function pop(){
  if(isEmpty()==true){
    console.log("UnderFlow");
  }else{
    console.log(stack[top])
    top--
  }
}

function isEmpty(){
  if(top == -1){
    return true
  }else{
    return false
  }
}

