


function handleSubmit() {

    const obj = new Object();
// case 1
    const alert = document.getElementById("alert");
    alert.style.display = "block"
    const strings = document.getElementById("case1").value;

    function palindrom(strings) {
        let len = strings.length;
        var bool = true;
        for (let i = 0; i < len; i++) {
            if (strings[i] != strings[len - i - 1]) {
                bool = false;
            } else {
                bool = true;
            }
        }
        return bool
    }
    console.log(palindrom(strings))

// case 2

    const value = document.getElementById("case2").value;
    const num = document.getElementById("case3").value;
    const ar = value.split(" ")
    
    function findLargeNumber(arrr , num){
       const final =  arrr.filter((item) => {
            return item > num
         } )
        return final
    }
    
    console.log(findLargeNumber(ar , num))

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
    
    const preDefineAge = document.getElementById("case4").value;
    
    function checkAge(preDefineAge) {
        const arr1 = arr.filter((items)=>{
            return items.age > preDefineAge
        })
        return arr1.length;
    }
    console.log(checkAge(preDefineAge))

    window.scrollTo(0,0);

    obj["case3"] = checkAge(preDefineAge)
    obj["case2"] = findLargeNumber(ar , num)
    obj["case1"] = palindrom(strings)

    localStorage.setItem("data" , JSON.stringify(obj))
}

const data = JSON.parse(localStorage.getItem("data"))
console.log(data["case3"])
console.log(data["case2"])
console.log(data["case1"])



