// Callbacks

// setTimeout(function(){
//     console.log("i was somewhere else")
// },6000)

// function a (b){
//     console.log("Im a")
//     b()
// }

// a(function b(){
//     console.log("im b from callbaxk")
// })
function cou(){
    let i = 0 ;
    document.getElementById("clickMe").addEventListener("click",
        function cb(){
             
                 console.log("ahh u clicked me", i++)
                })

}
cou();
