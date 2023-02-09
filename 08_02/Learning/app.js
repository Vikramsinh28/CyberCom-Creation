console.log("Hello")


// Variable LET
//  let cannot be Redeclared.

// let must be Declared before use.

// Variables defined with let have Block Scope.

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

var y = 2;   // Allowed
let y = 3;   // Not allowed

{
let y = 2;   // Allowed
let y = 3;   // Not allowed
}

{
let y = 2;   // Allowed
var y = 3;   // Not allowed
}

// hoisting concept 

// const 
// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");