let radius = [1,2,3,4]
const areaOfCircle =(radius)=>{
    let output = Math.PI * radius * radius ;
    return output
}
const circumOfCircle =(radius)=>{
    let output = Math.PI * 2 * radius ;
    return output
}

function calcualte(radius,logic){
    let ans = []
    for(let i = 0 ; i < radius.length ; i++){
        ans.push(logic(radius[i]))
    }
    return ans;
}

console.log(radius.map(circumOfCircle))
console.log(radius.map(areaOfCircle))


console.log(calcualte(radius,circumOfCircle))
console.log(calcualte(radius,areaOfCircle))