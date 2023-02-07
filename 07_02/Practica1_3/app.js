// Q -1  

const arr = [1,2,3,4,5];

const findSum = (arr) => {
    let sum = 0;
    for(let number of arr){
        sum = sum + number
    }
    return sum;
}
console.log("sum of arr element is " + findSum(arr));


// average 

const averagee = (arr) => {
    return findSum(arr)/arr.length;
}

// console.log(averagee(arr))


// find the maximum number of array

const maxx = (arr) => {
    const maxi = Math.max(...arr)
    // console.log(maxi)
}
maxx(arr)

// Q-2 

const stringss  = ["malay" , "milan" , "Vikramsinh" , "jash" , "adibhai"]

for(let i=0; i<stringss.length-1; i++){
    let j = i+1;
    if(stringss[i].length > stringss[j].length){
        let temp;
        temp = stringss[i];
        stringss[i] = stringss[j];
        stringss[j] = temp;
    }
}
console.log(stringss[stringss.length -1])


let x = stringss[0].length 
let index = 0;

for(let i=0; i<stringss.length; i++){
    if(stringss[i].length > x){
        x = stringss[i].length;
        index = i;
    }
}

console.log(stringss[index] , "length of string is" + x)




