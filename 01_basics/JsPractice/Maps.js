let arr = [1,2,3,4,5,55,2,8]


const double = (x)=> x*2
   



const output =  arr.map(double)
console.log(output)
console.log(arr)

const g = arr.filter((x)=> x > 4)
console.log(g)

const a = arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc = curr;
    }
    return acc;
},0)
console.log(a)

const list=[
    {firstName : "Sujith" ,lastName : "BN",age:22},
    {firstName : "Samarth" ,lastName : "BN",age:24},
    {firstName : "Seetha" ,lastName : "K",age:35},
    {firstName : "Pappa" ,lastName : "P",age:35}
]

const listOfNames = list.map(({firstName,lastName})=>{
    return firstName+" "+lastName
})
console.log(list)
console.log(listOfNames)

const ageFilter = list.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++

    }
    else{
        acc[curr.age] = 1
    }
    return acc
    
    
},{})

console.log(ageFilter)

const lessThirty = list.filter((x)=> x.age < 30).map((x)=>{
    return x.firstName
})

console.log(lessThirty)