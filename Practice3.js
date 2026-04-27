//JavaScript is a single threaded synchronus language which means one command at a time with specific order
// everything in javascript runs inside an exection context
// execution context has 2 parts 1. Memory component 2.Code component
// memory component is also called as variable environment


// This execution context created in 2 phases 
// 1. Memory creation phase
// 2. Code execution phase



//In first phase which is memory creation phase all the memory is allocated to all the variables and functions , it is explained below


// here memory is allocated to nums and in this first phase it stores undefined
// ex: nums : undefined
var nums = 2 ;

//allocate memory to square, its not like undefined will be stored , instead the whole function is stored in memory component 
// ex: square : fn(){whole code of the function }
function square(num){
  var ans = num*num;
}

// here memory is allocated to square2 and in this first phase(memory creation phase) it stores undefined
// ex: square1 : undefined
var square1 = square(nums)

// here memory is allocated to square2 and in this first phase(memory creation phase) it stores undefined
// ex: square2 : undefined
var square2 = square(4);


//This is the second phase which is code execution phase after memory allocation phase
// here js runs again through the whole program line by line
// Here what happens is , the real value of the variables will stored inside a variable and function will be happens in this phase
// in phase 2 , ex:  nums = 2 ;
// when it comes to the function part it is already stored and no need of assignment here so it goes to line next to the function 

// next line contains the function invokation which means the brand new execution context will be created inside the code component which 
// has same memory component and code component 
// same here also 2 phases will be there memory allocation phase and code execution phase
// whatever the variable inside the function and the parameter are stored inside the memory component and assigned with undefined 
// after the memory creation phase the  code execution will start and the variables are assigned with original values   


// whatever the brand new execution context was created after the code execution completed we encounter the return statement which means
// it should give the whole control or it should return the whole control to the program back to the place  where the function was invoked
// and the whole context will be deleted


//for thinking this is too much messy right then here comes the Call stack
// when the js runs the global execution context is added to the call stack , and it is keep added when the fucntion is called and the whole work is done
// call stack will be empty and it also maintain the order or execution context 
