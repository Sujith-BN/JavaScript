

// fetch("http://localhost:8080/ems/api/employees")
// .then((res)=>res.json())
// .then((res)=>res.map((employee)=>{
//     console.log(employee.firstName+" "+employee.lastName)

// } ))
// const id = 7

// fetch(`http://localhost:8080/ems/api/employees/delete/${id}`, {
//     method: "POST"
// })
// .then((res) => res.text())   // ✅ use text() for plain String
// .then((res) => console.log(res))  // "Deleted Employee Successfully"
// .catch((err) => console.log(err))

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P1 Fail")
    },5000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 Fail")
    },4000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P3 Fail")
    },10000)
})

Promise.any([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=>{console.log(err)
    console.log(err.errors)
})