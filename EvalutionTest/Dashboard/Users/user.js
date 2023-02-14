const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const adminName = document.getElementById("adminName");
adminName.textContent = currentUser.name;

function handleAddUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    let dt = new Date(dob);
    var diff_ms = Date.now() - dt.getTime();
    var age_dt = new Date(diff_ms);
    var age = Math.abs(age_dt.getUTCFullYear() -1970);

    if(name && email && password && dob){
        let data = {
            name,
            email,
            password,
            dob,
            age
        };
        const userData = JSON.parse(localStorage.getItem("data"));
        if(userData){
                userData.push(data);
                localStorage.setItem("data", JSON.stringify(userData));
        }else{
            localStorage.setItem("data", JSON.stringify([data]));
        }
    }

    const table = document.getElementById("table");
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const passwordCell = document.createElement("td");
    const dobCell = document.createElement("td");
    const ageCell = document.createElement("td");

    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    ageCell.textContent = age;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(passwordCell);
    row.appendChild(dobCell);
    row.appendChild(ageCell);

    table.appendChild(row);

    let resetForm = () => {
        name.value = "";
        email.value = "";
        password.value = "";
        dob.value = "";
    };
    resetForm();
}