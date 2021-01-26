let link= document.querySelectorAll("a");
link[0].addEventListener("click", dontLeave);
link[1].addEventListener("click", dontLeave);

function dontLeave(event) {
let select= confirm("Are you sure you want to leave the page?");
if (!select) {
    event.preventDefault();
} 
}

