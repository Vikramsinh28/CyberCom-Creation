const btn1 = document.getElementById("yes1")
const btn2 = document.getElementById("no1")
const btn3 = document.getElementById("yes2")
const btn4 = document.getElementById("no2")
const btn5 = document.getElementById("btn")

const hide1 = document.getElementById("hide1")
const hide2 = document.getElementById("hide2")

btn1.addEventListener("click", function(){
    hide1.style.display = "block"
})
btn2.addEventListener("click" , function(){
    hide1.style.display = "none"
})
btn3.addEventListener("click", function(){
    hide2.style.display = "block"
    btn3.ariaChecked = "true"
})
btn4.addEventListener("click", function(){
    hide2.style.display = "none"
})

btn5.addEventListener("click", function(){
    let table = document.getElementById("table")
    let row = document.createElement("tr")
    let cell1 = document.createElement("td")
    let cell2 = document.createElement("td")
    let cell3 = document.createElement("td")
    let cell4 = document.createElement("td")
    let cell5 = document.createElement("td")

    let text1 = document.createTextNode("1")
    let text2 = document.createTextNode("2")
    let text3 = document.createTextNode("3")
    let text4 = document.createTextNode("4")
    
    cell1.appendChild(text1)
    cell2.appendChild(text2)
    cell3.appendChild(text3)
    cell4.appendChild(text4)


    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)

    table.appendChild(row)
})

const addQuestion = () => { 
    
}



