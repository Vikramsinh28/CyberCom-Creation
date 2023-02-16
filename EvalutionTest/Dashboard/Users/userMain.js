const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const adminName = document.getElementById("adminName");
adminName.textContent = currentUser.name;


function addUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let time = new Date();
    console.log(time.getDay() + "/" + time.getMonth() + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
    let age = Age(dob);

    if (name && email && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password && dob) {
        let id;
        let users = JSON.parse(localStorage.getItem("users"));
        if (users && users.length > 0) {
            let user = users.find((user) => user.email == email);
            if (user) {
                // eError.innerHTML = "User already exists !!";
                alert("User already exists !!");
                return false;
            } else {
                let user = {
                    id: users.length,
                    name,
                    email,
                    password,
                    dob,
                    age
                }
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                window.location.href = "./User.html";
            }
        } else {
            let user = {
                id: 0,
                name,
                email,
                password,
                dob,
                age
            }
            localStorage.setItem("users", JSON.stringify([user]));
            window.location.href = "./User.html";
        }
        return true;
    } else {
        return false;
    }
}


function addTable() {
    let temp = JSON.parse(localStorage.getItem("users"));
    let tbody = document.getElementById("tbody");
    if(temp && temp.length > 0)
    {
        for (let i = 0; i < temp.length; i++) {
            let tr = document.createElement("tr");
            let td0 = document.createElement("td");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
    
            td0.innerHTML = i + 1;
            td1.innerHTML = temp[i].name;
            td2.innerHTML = `<a href="mailto:${temp[i].email}"> ${temp[i].email}</a>`;
            td3.innerHTML = temp[i].password;
            td4.innerHTML = temp[i].dob;
            td5.innerHTML = temp[i].age;
            td6.innerHTML = `<button class="btn btn-primary" onclick="handleEditUser(${temp[i].id})">Edit</button> <button class="btn btn-danger" onclick="handleDeleteUser(${i})">Delete</button>`;
    
            tr.append(td0);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tbody.append(tr);
        }
    }
}
addTable();

function handleDeleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
}


function handleEditUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("dob").value = user.dob;
    document.getElementById("addUser").value = "Update User";
    document.getElementById("addUser").setAttribute("onclick", `updateUser(${index})`);
}

function updateUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users[index];
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.dob = document.getElementById("dob").value;
    user.age = Age(user.dob);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("addUser").value = "Add User";
    document.getElementById("addUser").setAttribute("onclick", `addUser()`);
    window.location.href = "./User.html";
}



function Age(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
