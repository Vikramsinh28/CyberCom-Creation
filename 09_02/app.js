const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };

for(let x in person){
    console.log(x + ":" , person[x] )
}
for(let i=0; i<Object.keys(person).length; i++){
    console.log(Object.keys(person)[i] + " : " + Object.values(person)[i])
}
const arr = Object.entries(person);
arr.map((item, value)=> {
    console.log(item[0] + " : " + item[1] , value)
})


const details = {
    name : "Virkams",
    as : "sfa",
}

const newObj = {...person , ...details};
console.log(newObj);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// (2) defines the position where new elements should be added 
// (0) defines how many elements should be removed

console.log(fruits)

fruits.splice(2 ,2, "Lemon" , "Kiwi")
console.log(fruits)

