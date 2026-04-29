//setTimeout



for(var i = 1 ; i <=5 ; i++){
    function lund(a){
        setTimeout(function(){
        console.log(a)},a*1000)
    }

    lund(i)

}

console.log("will this come first")