// function declaration 

function area(length , width){
    return length * width
}
console.log(area(9 ,3));

// function expression 

const getArea = function(width , height){
    return width * height;
}
console.log(getArea(1 ,2));

// named func expression 

const math = {
    sum : function _doSum(a , b){
        console.log("sum is " , a + b);
    }
};

math.sum(2 , 4);

// named property

const varFuncName = function originalName(){}

console.log(varFuncName.name);

// arrow function

let myFunction = (a , b) => {
    console.log(a + b);
}
myFunction(1 ,3);

let func = () => {
    console.log("Radhe Radhe")
}
func();

let info = {
    name : "Vikrmasinh",
    age  : 23,
    address : function(year) {
        console.log(year)
        return 2023 - year + 'year'
    } 
}

console.log(info.address(2909))

let myFun = ( a , b ) => a * b;

console.log(myFun(1 ,2));
