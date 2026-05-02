

const cart = ["gold","rings","earings"]



createOrder(cart)
.then((res)=>{
    return proceedToPayemnt(res)
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>console.log(err))
.then(()=> console.log("hahahahah"))




//Producers end
function createOrder(cart){

    const promise = new Promise(function(resolve,reject){

        if( cart.length < 0){
          
            reject("cart is not valid");
            return
        
        }
        const orderId = 1234

        if(orderId){
            resolve(orderId)
 
        }

    });

    return promise;

}


function proceedToPayemnt(orderId){

    const p = new Promise(function(resolve,reject){

        if(orderId ==1234){
            resolve("Payment successfull")
            return
        }
        if(orderId !=1234){
            reject("Order failed due to incorrect order id")
        }

    })

    return p ;



}
