// // case 2
// function case2(){
//     setTimeout(function(){
//       console.log("boil water")
//       setTimeout(function(){
//         console.log("add tea leaves")
//         setTimeout((function(){
//             console.log("addMilk")
//         }),1000)
//       },3000)
//     },5000)
// }
// case2()
// // case 1 
// function case1(){
//     setTimeout(function(){
//         console.log("Function 1")
//     }, 10000)
//     setTimeout(function(){
//         console.log("Function 2")
//     }, 10000);
//     setTimeout(function(){
//         console.log("Function 3")
//     }, 8000)
// }
// // case1()

// function callbacks(){
//     setTimeout(function(){
//         console.log("execute after 10s - 1st function")
//         setTimeout(function(){
//             console.log("execute after 10s - 2nd function")
//             setTimeout(function(){
//                 console.log("execute after 8s - 3rd function")
//             },4000)
//         },5000)
//     },5000)
// }
// // callbacks();

// function call1(call2 , call3){
//     setTimeout(function(){
//         console.log("func 1")
//         call2(call3)
//     }, 10000)
// }
// function call2(call3){
//     setTimeout(function(){
//         console.log("func 2")
//         call3()
//     }, 10000)
// }
// function call3(){
//     setTimeout(function(){
//         console.log("func 3")
//     },8000)
// }
// call1(call2 , call3);

function handleSubmit(display){
   const fname = document.getElementById("fname").value
   const lname = document.getElementById("lname").value
   const email = document.getElementById("email").value
   const mobile = document.getElementById("mobile").value
   display(fname , lname , email , mobile);
}
function display(fname , lname , email , mobile){
    console.log(fname , lname , email , mobile)
}