
// starvation is nothing but the call back doesnt get the chance to 
// execute since the microtask queue is filled with task inside another microtask
//creates starvation
console.log("hi hello")


function outer(){
    console.log("Im inside outer and next line is return inner")
    return function inner(){
        console.log("im coming after 10 seconds")
    }
}
const fn = outer();
console.log("Im just after that outer inner function statement")


setTimeout(fn,10000)