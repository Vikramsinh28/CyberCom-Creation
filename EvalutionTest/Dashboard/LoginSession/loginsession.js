const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){
  const adminName = document.getElementById("adminName");
  adminName.textContent = currentUser.name;
}

const admin = JSON.parse(localStorage.getItem("users"));
console.log(admin);

const table = document.getElementById("table");
admin.forEach((item) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const startTime = document.createElement("td");
  const endTime = document.createElement("td");

  nameCell.textContent = item.name;
  row.appendChild(nameCell);

  startTime.textContent = item.loginTime;
  row.appendChild(startTime);

  endTime.textContent = item.logoutTime;
  row.appendChild(endTime);

  table.appendChild(row);
})

function logout(){
    
}