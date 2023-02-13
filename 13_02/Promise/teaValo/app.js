function boilWater(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve("Boil water for 5 sec")
        }, 5000)
    })
}
function addLeaves(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve("add leaves for 3 sec")
        },3000)
    })
}
function addMilk(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve("add milk")
        })
    })
}
boilWater().then((data)=> {
    console.log(data)
    addLeaves().then((data) => {
        console.log(data)
        addMilk().then((data) => {
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }).catch((err)=> {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})