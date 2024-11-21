var button = document.getElementById("hide-button");
var nav = document.getElementById("nav-bar");
button.addEventListener("click", hide);
var move = 0;
var timer;
var left = 100;

function hide(){
    timer = setInterval(moveLeft, 20);
}

function moveLeft(){
    nav.style.right = move + "px";
    move++;
    if(move >= left){
        clearInterval(timer);
    }
}