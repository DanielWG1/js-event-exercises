let button= document.getElementById("hider");
let txt= document.getElementById("text");
button.addEventListener("click", hideFunc);

function hideFunc() {
   txt.style.visibility= "hidden";
}