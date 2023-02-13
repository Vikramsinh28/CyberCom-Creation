function handleSubmit(){
    const _date = document.getElementById("case1").value;
    if(_date !== ""){
        const alert = document.getElementById("alert1");
        alert.style.display = "block"
    }else{
        const alert = document.getElementById("alert2");
        alert.style.display = "block"
    }
    let dt = new Date(_date);
    console.log(dt)
    var diff_ms = Date.now() - dt.getTime();
    var age_dt = new Date(diff_ms);
    var age = Math.abs(age_dt.getUTCFullYear() -1970);
    console.log(age)
    const label = document.getElementById("label")
    label.innerHTML = age 
}