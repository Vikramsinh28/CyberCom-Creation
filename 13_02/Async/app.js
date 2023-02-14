// running time 15 second
console.log('start');
async function func1(){

    setTimeout(() => {
        console.log('func1')
    },5000)
}
async function func2(){

    setTimeout(() => {
        console.log('func2')
    },10000)
}
async function func3(){

    setTimeout(() => {
        console.log('func3')
    },15000)
}
async function main(){
    await func1();
    await func2();
    await func3();
}
main();

async function func1(){
    
        setTimeout(async() => {
            console.log('func1')
            await func2();
        },5000)
}

async function func2(){
    
        setTimeout(async() => {
            console.log('func2')
            await func3();
        },10000)
}
async function func3(){
    
        setTimeout(async() => {
            console.log('func3')
        },15000)
}
func1();


