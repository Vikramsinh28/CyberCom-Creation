function func1(){
    return new Promise((resolve , reject) => {
        setTimeout(function(){
             resolve("Op of 1")
        },5000)     
    })
}
function func2(){
    return new Promise((resolve , reject) => {
        setTimeout(function(){
             resolve("Op of 2")
        },5000)     
    })
}
function func3(){
    return new Promise((resolve , reject) => {
        setTimeout(function(){
             resolve("Op of 3")
        },5000)     
    })
}

func1().then((data) => {
    console.log(data)
    func2().then((data) => {
        console.log(data)
        func3().then((data)=> {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
}).catch((err)=> {
    console.log(err)
})

