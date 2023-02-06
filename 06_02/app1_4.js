// form validation
function handleSubmit(){
    const fname = document.getElementById("fname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    if(fname == "" && mobile == "" && email == ""){
        alert("pls enter the details Properly")
    }
    if(mobile.length != 10){
        alert("Pls Check the mobile number !!")
    }
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(!email.match(mailformat)){
       alert("Pls enter a valid email address !")
    }
}