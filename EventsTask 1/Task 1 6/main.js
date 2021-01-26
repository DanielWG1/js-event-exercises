let horse= document.querySelector(".horse");
let donkey= document.querySelector(".donkey");
let cat= document.querySelector(".cat");
let horseRemove= document.querySelector(".horseButton");
let donkeyRemove= document.querySelector(".donkeyButton");
let catRemove= document.querySelector(".catButton");

horseRemove.addEventListener("click", horseRemoveFunc);

function horseRemoveFunc() {
    horse.remove();
}
donkeyRemove.addEventListener("click", donkeyRemoveFunc);

function  donkeyRemoveFunc() {
    donkey.remove();
}
catRemove.addEventListener("click", catRemoveFunc);

function catRemoveFunc() {
    cat.remove();
}