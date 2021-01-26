let field= document.getElementById("field");
let ball = document.getElementById("ball");   
field.addEventListener("click", ballMove);

function ballMove(event) {
    let fieldCoor= field.getBoundingClientRect();
    let ballCoor= {
      top: event.clientY - fieldCoor.top - ball.clientHeight/2,
      left: event.clientX - fieldCoor.left - ball.clientWidth/2 
    };
    if (ballCoor.top < 0)
    ballCoor.top = 0;
    if (ballCoor.left < 0)
    ballCoor.left = 0;

    ball.style.left = ballCoor.left + 'px';
    ball.style.top = ballCoor.top + 'px';
}


   