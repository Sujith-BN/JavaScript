
let a = 0 ;
function Counter(){

    

    this.increment= function(){
        a++;
        console.log(a)
    }
    this.decrement= function(){
        a--;
        console.log(a)
    }

}

const an = new Counter()

an.increment()
an.increment()
an.decrement()