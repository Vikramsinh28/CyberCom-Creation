const label = document.getElementById("l");
console.log(label);

const grid  = document.getElementsByClassName("grid");
console.log(grid);

const tag =  document.getElementsByTagName("div");
console.log(tag);

const query = document.querySelector("#l");
console.log(query);

const queryAll = document.querySelectorAll(".grid");
console.log(queryAll);

function myFunction() {
    const h2 = document.getElementById("myH2");
    let html = "<p>My new paragraph.</p>";
    h2.insertAdjacentHTML("afterend", html);
    // setAttribute
    const h4 = document.getElementById("h4");
    h4.setAttribute("class" , "newClass");
    // getAttribute
    const h5 = document.getElementById("h5").getAttribute("class");
    console.log(h5);
    
    const heading = document.getElementById("h5").classList;
    heading.add("myStyle")

  }


