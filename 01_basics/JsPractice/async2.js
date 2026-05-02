

const API = "https://api.github.com/users/Sujith-BN"

async function myData(){

    try{
        const data = await fetch(API)
        const ans = await data.json()
        return ans

    }
    catch(err){
        console.log(err)
    }

 


}
myData().then((x)=>console.log(x.name))