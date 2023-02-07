// Question 1

person = {
    name : "Vikramsinh",
    address : "Bhavnagar",
    college : "gec bvn",
    age: 23
}

// access of object 

console.log(person.name)
console.log(person.address)
console.log(person.age)


//modification of code
person.name = "kuldip pandya"
person.college = "modasa"
person.age = 56
    // access of modified object
    console.log(person)

// Question 2

product = {
    name : "shampoo",
    company : "clinic plus",
    quantity : 23,
    price :10
}

// code about calculate the total cost of quantity
console.log(product.quantity *product.price)

// Question 3

// access the objects present in the array 

const arr = [
     {
        name : "shampoo",
        company : "clinic-plus",
        quantity : 23,
        price :10
     },
     {
        name : "toothbrush",
        company : "colagate",
        quantity : 2,
        price :1
     },
     {
        name : "soap",
        company : "joy",
        quantity : 3,
        price :0
     }
]
if(arr && arr.length>0){
    for(let i=0; i<arr.length; i++){
        console.log(`Name : ${arr[i].name} ,Company : ${arr[i].company} , Quantity : ${arr[i].quantity} , Price : ${arr[i].price}`)
    }
}

// question 4

// function that takes an object as an argument and returns a new object with specific properties

// we taking a person as a function argument

oldobj = {
    name : "milaniyo",
    age: 23,
    address : "surat"
}
const newObject = (oldobj) => {
     const obj = new Object();
     obj.name = oldobj.name;
     obj.age = oldobj.age;
     return obj
}
console.log(newObject(oldobj))

// Q-5 

// Write a function that takes two objects as arguments and returns a new object that 
// combines the properties of both objects. For example, a function that takes two objects 
// with name and age properties and returns an object with name, age, and address 
// properties

info = {
    name : "raj",
    sname : "oza",
}
infoDetail = {
    college : "gec bvn",
    internship : "isro"
}

// method 1
const  mix = (obj1 , obj2) => {
     let obj3 = new Object();
     obj3 = {...obj1 , ...obj2}
     return obj3
} 
console.log(mix(info , infoDetail))

// method 2
const mix2 = (obj1 , obj2) => {
    Object.assign(obj1 , obj2);
    return obj1
}

console.log(mix2(info , infoDetail))

// to freeze the object to be prevent 
// Object.freeze(object1);


