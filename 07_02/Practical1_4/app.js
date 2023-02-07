// method 1 

// const height = [1,8,6,2,5,4,8,3,7]

// let maxi = 0;
// for(let i=0; i<height.length; i++){
//     for(let j=i + 1; j<height.length; j++){
//         if(height[i] > height[j]){
//             value = height[j] * ( j - i)
//             if(value > maxi){
//                 maxi = value
//             }
//         }else{
//             value = height[i] * ( j - i)
//             if(value > maxi){
//                 maxi = value
//             }
//         }
//     }
// }

// console.log(maxi)



// method 2

// let maxi = 0;
// i = 0;
// j = height.length - 1;

// while(i < j) {
//     if(height[i] > height[j]){
//         let value = height[j] * (j - i);
//         if(value > maxi){
//             maxi = value
//         }
//         j = j - 1;
//     }else{
//         let value = height[i] * (j - i);
//         if(value > maxi){
//             maxi = value
//         }
//         i = i + 1
//     }
// }
// console.log(maxi)

// program 2

const Input = "<html><head></head><body></body></html>"

const arr = Input.split("")
console.log(arr)
const temp = []
for(let i = 0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]=="<" && arr[j]==">"){
        }
    }
}
console.log(temp)





