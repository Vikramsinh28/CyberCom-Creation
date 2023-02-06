function myFunctionForAppend() {
    const node = document.createElement("li");
    const textnode = document.createTextNode("water")
    node.appendChild(textnode);
    document.getElementsByTagName("ul")[0].appendChild(node);
}
function myFunctionForRemove() {
    const list = document.getElementsByTagName("ul");
    list[0].removeChild(list[0].childNodes[0]);
}

function myFunctionForReplace(){
    const list =document.getElementsByTagName("ul");
    const node = document.createElement("li");
    const textnode = document.createTextNode("water1")
    node.appendChild(textnode);
    list[0].replaceChild(node , list[0].childNodes[0])
}

// removeCHild()  
const ul = document.getElementsByClassName("ul");
const li = document.getElementById("chai");

// ul.removeChild(li)

// replaceChild()
const ull = document.getElementsByClassName("ul");
const node = document.createElement("li");
const textnode = document.createTextNode("water1")

node.appendChild(textnode);

ull.replaceChild(node , li)

