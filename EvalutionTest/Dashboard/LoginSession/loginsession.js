const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const adminName = document.getElementById("adminName");
adminName.textContent = currentUser.name;

const admin = JSON.parse(localStorage.getItem("admin"));
console.log(admin);

const table = document.getElementById("table");
admin.forEach((item) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = item.name;
  row.appendChild(nameCell);
  table.appendChild(row);
})