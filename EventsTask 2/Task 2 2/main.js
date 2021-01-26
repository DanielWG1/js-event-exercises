let pictures= document.querySelectorAll(".pic");
let bigImg= document.querySelector(".bigImg");

for (picture of pictures)
picture.addEventListener("click", function(e){
    bigImg.src='https://en.js.cx/gallery/img' +e.target.id+ '-thumb.jpg'
});





