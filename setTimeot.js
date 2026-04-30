
console.log("Program starts here")

setTimeout(function(){
    console.log("Im setTimeout guy")

},5000)

let start  = new Date().getTime();
let end = start

while(end < start+10000){
   
    end = new Date().getTime()
}

console.log("programs ends here")