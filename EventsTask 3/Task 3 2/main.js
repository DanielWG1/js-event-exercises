let tree= document.getElementById("tree");
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); 
}
tree.addEventListener("click", collapse);

function collapse(event) {
    let target = event.target; 
    if (target.tagName != 'SPAN')
         return; 
    let ul= target.nextSibling;
    if (ul.tagName != 'UL') 
        return; 
    if (ul.classList.contains('collapse')) {
        ul.classList.remove('collapse'); 
    } else {
        ul.classList.add('collapse');
    }
  };

  
 