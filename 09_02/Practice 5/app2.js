const arr = [
    {
    
    },
    
    {
        name : "param",
        age : 23
    },
    {
        name : "raj",
        age : 23
    },
    {
        name : "kuldip",
        age : 23
    },
]

const table = document.createElement("table");
const thead = document.createElement("tr");
const theadRaw = document.createElement("td");

table.appendChild(thead);


console.log(Object.keys(arr[0]))



arr.map((items) => {
    for(let i in items){
        console.log(i , items[i])
    }
})