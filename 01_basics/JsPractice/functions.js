//Function statement

// function a(){
//     console.log("Hi my name is Sujith")
// }

//Function Expression 
// problems comes in hoisting
// var b = function(){
//     console.log("Hi im Sujith BN")
// }

//Anonymous function

// function(){

// }

//Named function expression

// var k = function abc(){

// }

//First class functions
//The ability of fucntions to be used as a value , assign it to variable;
//pass to any function and can return a function inside a function

function a (fn){
    return fn

    
}
function b(){
    console.log("Hi")
    
}
a(b)()