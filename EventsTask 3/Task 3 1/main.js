let div= document.getElementById("div");
div.addEventListener("click", deleteFunc);

function deleteFunc(event) {
    if(event.target.className != "remove-button") 
    return;
    let pane= event.target.closest(".pane");
    pane.remove();
}