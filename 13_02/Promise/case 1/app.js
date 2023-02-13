function saveDetails() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return new Promise((resolve, reject) => {
        if (fname == "") {
            reject("First name is required");
        } else if (lname == "") {
            reject("Last name is required");
        } else if (email == "") {
            reject("Email is required");
        } else if (mobile == "") {
            reject("Mobile number is required");
        } else if (!email.match(validRegex)) {
            reject("Email is invalid");
        } else if (mobile.length != 10) {
            reject("Mobile number must have in 10 digits");
        } else {
            resolve("Form is validate successfully !!!");
        }
    })
}

function printDetails(content) {
    console.log(content);
}