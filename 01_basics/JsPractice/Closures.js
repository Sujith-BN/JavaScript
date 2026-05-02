//Closures

//here what is happening is function a() returns the function b()
// which has the value of x as lexically scoped environment and then
// a() popped out from the cal stack but the returning function b()
//remembers the value of x because it has the reference of x and Js keeps 
// the value of x in b's clousure and that is what we called "Closure"

function a(){
    let w =30
    return function b(){
        let x =40
        return function c(){
            let y =80
            return function q(){
                console.log(w,x,y)
            }
        }
    
    }
  
    
}

var e = a()()()
e()