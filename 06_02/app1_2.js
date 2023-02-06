const person = {
    name : 'Max',
    age : 29,
    address : "Abd"
}
// access name property
console.log(person.name);
// modify name property
person["name"] = "Maximilian";

// add new property
person["hobbies"] = ["sports" , "cooking"];

console.log(person);


const product = {
    name : "apple",
    price : 10,
    quantity : 5
}

// calculate the quantity product :
console.log(product.price * product.quantity);

