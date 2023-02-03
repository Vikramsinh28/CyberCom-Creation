const HandleForm = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let remail = document.getElementById("remail").value;
    let password = document.getElementById("password").value;
    let rpassword = document.getElementById("rpassword").value;
    let squestion = document.getElementById("squestion").value;
    let sanswer = document.getElementById("sanswer").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let phone = document.getElementById("phone").value;

    const data = {
        "fname": fname,
        "lname": lname,
        "dob":dob,
        "gender":gender,
        "email":email,
        "password":password,
        "squestion":squestion,
        "sanswer":sanswer,
        "address":address,
        "city":city,
        "state":state,
        "zip":zip,
        "phone":phone
    }
    localStorage.setItem("data", JSON.stringify(data));
}

const data = localStorage.getItem("data");
const parsedData = JSON.parse(data);

console.log(Object.keys(parsedData).length);

if(parsedData != null){
    const arr1 = Object.keys(parsedData);
    const arr2 = Object.values(parsedData);
    var table = document.createElement('table');
    for (var i = 0; i < Object.keys(parsedData).length; i++){
        var tr = document.createElement('tr');   
    
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
    
        var text1 = document.createTextNode(arr1[i]);
        var text2 = document.createTextNode(arr2[i]);
    
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
    
        table.appendChild(tr);
    }
    document.body.appendChild(table);

    const tablee = document.getElementsByClassName("tablee");
    tablee.appendChild(table)
}
