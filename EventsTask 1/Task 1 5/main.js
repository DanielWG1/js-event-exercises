let ul= document.querySelector("ul");
let down= document.getElementById("down");
let right= document.getElementById("right");
down.addEventListener("click", disapear); 

function disapear() {
    ul.style.visibility= "hidden";
    down.style.visibility= "hidden";
    right.style.visibility= "visible";
}

right.addEventListener("click", appear);

function appear() {
    ul.style.visibility= "visible";
    right.style.visibility= "hidden";
    down.style.visibility= "visible";
}

