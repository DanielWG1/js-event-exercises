document.body.addEventListener("mouseover", tooltip);
document.body.addEventListener("mouseout", removeTooltip);


function tooltip(event) {
    let el = event.target;

    if (!el.hasAttribute('data-tooltip')) return;

    let div= document.createElement("DIV");
    div.classList.add("tooltip");
    div.innerHTML= el.getAttribute('data-tooltip')
    document.body.appendChild(div);
    positionTooltip(el, div)
}
function removeTooltip(event) {
    let el = event.target;
    if (!el.hasAttribute('data-tooltip')) return;
    let tooltips= document.getElementsByClassName("tooltip");
    for(tooltip of tooltips){
        tooltip.remove();
    }
}

function positionTooltip(el, div) {
let elCoor= el.getBoundingClientRect();
let divCoor= div.getBoundingClientRect();
let top= elCoor.top-divCoor.height-5;
 if(top > 0)
 top = elCoor.top + divCoor.offsetHeight + 5;
let left= elCoor.left+(elCoor.width-divCoor.width)/2;
 if(left < 0)
 left = 0;
 div.style.left = left + 'px';
 div.style.top = top + 'px';
}
