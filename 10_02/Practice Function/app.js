// case 1

function palindrom(strings){
    let len = strings.length;
    var bool = true;
    for(let i=0; i<len; i++){
        if(strings[i] != strings[len - i -1]){
              bool = false;
        }else{
            bool = true;
        }
    }
    return bool
}
console.log(palindrom("navan"))

// case 2

const value = prompt("Enter the numbers of Array with one space");
const ar = value.split(" ")

function findLargeNumber(arrr , num){
   const final =  arrr.filter((item) => {
        return item > num
     } )
    return final
}

console.log(findLargeNumber(ar , 3))

// case 3

const arr = [
    {
        id:"1",
        name: "john",
        age: "10"
    },
    {
        id:"2",
        name: "john",
        age: "40"
    },
    {
        id:"3",
        name: "john",
        age: "29"
    },
]

const preDefineAge = 25

function checkAge(preDefineAge) {
    const arr1 = arr.filter((items)=>{
        return items.age > preDefineAge
    })
    return arr1.length;
}
console.log(checkAge(preDefineAge))
