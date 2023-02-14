let arr = [
    {
        user: {
            name: "malay",
            age: 22,
            education: {
                degree:{
                    field: "BE",
                    college: "GEC"
                }
            }
        }
    },
    {
        user: {
            name: "milan",
            age: 23,
            education: {
                degree:{
                    field: "B. com",
                    college: "GEC"
                }
            }
        }
    }
]

const tbody = document.getElementById("tbody");

let result = arr.map((item) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = item.user.name;
    let td2 = document.createElement("td");
    td2.textContent = item.user.age;
    let td3 = document.createElement("td");
    td3.textContent = item.user.education.degree.field;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
 
    tbody.appendChild(tr);
})