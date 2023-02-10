function handleSubmit(){
    const alert = document.getElementById("alert");
    alert.style.display = "block"

    const mass = document.getElementById("case1").value;
    const height = document.getElementById("case2").value;

    const BMI =  Math.pow((mass * height), 2)
    console.log(BMI);

    const text = document.createTextNode(BMI);
    console.log(text)
    const label = document.getElementById("label")

    label.appendChild(text)
}