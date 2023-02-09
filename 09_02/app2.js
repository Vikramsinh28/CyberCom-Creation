let arr = [
    {
        user: {
            name: "malay",
            age: 22,
            education: {
                degreemovember :{
                    field: "BE",
                    college: "GEC"
                }
            }
        }
    },
    {
        user: {
            name: "vikramsin",
            age: 12,
            education: {
                degreemovember :{
                    field: "<E",
                    college: "GEC"
                }
            }
        }
    },
   
]

const table = document.getElementById("table")

for(let i=0; i<arr.length; i++){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);  
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHtml = arr[i].user.name;
    cell2.innerHtml = arr[i].user.age;
    cell3.innerHtml = arr[i].user.education.degreemovember.field;
}


