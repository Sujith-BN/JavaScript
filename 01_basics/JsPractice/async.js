// Async function always returns a promise


const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Payment done sexesfully"),20000)
    
})

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Payment done sexesfully My freind"),40000)
    
})
// async function hello() {
//     return promise
// }
async function hello() {
    console.log("hi")
   
    const data = await promise
   
    console.log("Hi my name is Sujith BN")
    console.log(data)
    const data1 = await promise1
   
    console.log("This is after promise 1")
    console.log(data1)
}
console.log("Hello from js engine")

hello()