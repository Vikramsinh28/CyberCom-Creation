console.log("Hello")

const numbers = [34,5,3,4,2,234,43,43,1];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value , index , array){
    txt = txt + value + "<br>";
}


// map method 

// map() methods creates a new array by performing a fun 

const numbers1 = [34,5,3,4,2,234,43,43,1];
const numbers2 = numbers1.map(myFunction1);

function myFunction1(value , index , array){
    return value * 2;
}
console.log(numbers2);

// filter method

// filter() method creates a new array with array elements that passes a test

const numbers3 = [34,5,3,4,2,234,43,43,1];
const numbers4 = numbers3.filter(myFunction2);

function myFunction2(value , index , array){
    return value < 20;
}
console.log(numbers4);

// reduce method

// reduce() method reduces the array to a single value

const numbers5 = [34,5,3,4,2,234,43,43,1];
const numbers6 = numbers5.reduce(myFunction3);

function myFunction3(total , value , index , array){
    return total + value;
}

console.log(numbers6);

// find method

// find() method returns the value of the first element in an array that passes a test

const numbers7 = [34,5,3,4,2,234,43,43,1];
const numbers8 = numbers7.find(myFunction4);

function myFunction4(value , index , array){
    return value > 20;
}

