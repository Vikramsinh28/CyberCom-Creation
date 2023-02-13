function handleSubmit(){
    const str = document.getElementById("case1").value;
    if(str == ""){
        alert("Enter the string!")
    }else{
        const arr = str.split("");
        const text = document.createTextNode(arr);
        const label = document.getElementById("label")
        label.appendChild(text)
    }
}