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
// console.log(stringss[stringss.length -1])


let x = stringss[0].length 
let index = 0;

for(let i=0; i<stringss.length; i++){
    if(stringss[i].length > x){
        x = stringss[i].length;
        index = i;
    }
}

// console.log(stringss[index] , "length of string is" + x)

// Q - 3

// Create an array of objects and write code to sort the objects based on a specific 
// property (e.g., name, age, etc.

const users = [
    {
        name : "Vikramsinh",
        age : 23
    },
    {
        name : "malay",
        age : 20
    },
    {
        name : "milan",
        age : 26
    },
    {
        name : "jash",
        age : 21
    }
]
users.sort((a, b) => {
    return a.age - b.age;
})

users.map((value , i)=> {
    console.log(i , value.name , value.age)
})


// Q - 4 

// Write a function that takes an array as an argument and returns a new array with 
// duplicates removed.

const a = [1,2,3,3,6,4,5,5,567,7]
const removeDuplicate = (a) => {
    const ar =new Set(a)
    console.log(ar)
}
removeDuplicate(a)

// Q -5 

// Write a function that takes two arrays as arguments and returns a new array that 
// combines the elements of both arrays, removing any duplicates.

const arr1 = [1,2,3,2,1,2,3,4,3];
const arr2 = [5,3,5,3,0,2];

const arr3 = [...arr1 , ...arr2]

const sorted = new Set(arr3);

console.log(sorted)

// Q-6 

// Create an array of strings and write code to sort the strings in alphabetical order

const names = ["vikrma" , "malay" , "kirit" , "hsas"];

names.sort();
console.log(names)






