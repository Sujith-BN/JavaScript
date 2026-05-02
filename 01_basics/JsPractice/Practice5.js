// function invokation and variable environment

//just understood how function works in javascript 
// whenever we call the fucntion the seperate execution context will be added in call stack 
// after done executing it will be popped out from the call stack

var x = 1 
a()
b()
console.log(x)
function a(){
    var x = 10
    console.log(x)
}
function b(){
    var x = 100
    console.log(x)
}