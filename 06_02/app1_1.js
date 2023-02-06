// dom functionality 
function myFunction(){
   const ptag = document.getElementById("ptag");
   ptag.textContent = "Hello World";
}
function add(){
    const li = document.createElement("li");
    li.textContent = "New Item";
    const ul = document.getElementById("ul");
    ul.appendChild(li);
}
function remove(){
    const ul = document.getElementById("ul");
    ul.removeChild(ul.lastElementChild);
}
function p1(para_id , text){
    const id = document.getElementById(para_id);
    id.textContent = text
}


