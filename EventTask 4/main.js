let list= document.getElementById("ul");
list.addEventListener("click", color);

function color(event) {
    let target= event.target;
    if(target.tagName != "LI") return;
    colorText(event.ctrlKey, target);
};

function colorText(ctrlDown, li) {
    if(!ctrlDown) {
        let selectedItems= document.querySelectorAll('.selected');
        for(item of selectedItems) {
            item.classList.remove('selected');
        }    
        li.classList.add("selected");
    } else {
        li.classList.toggle("selected");
    }
}
