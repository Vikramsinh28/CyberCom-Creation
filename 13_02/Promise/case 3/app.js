function func1(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve("Func1")
        },10000)
    })
}
function func2(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve("Func2")
        },10000)
    })
}
function func3(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve("Func3")
        },8000)
    })
}
func1().then((data)=> {
    console.log(data)
    func2().then((data)=> {
        console.log(data)
        func3().then((data)=>{
            console.log(data)
        }).catch((err)=> {
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})