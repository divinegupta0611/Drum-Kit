var timeout;

function btn1(){
    var btn1 = document.querySelector("#btn1");
    btn1.style.border = "5px solid rgb(0, 255, 51)";
    btn1.style.backgroundColor = "rgb(111, 0, 76)";
    btn1.style.color = "white";
    var audio = new Audio("./Resources/sounds/crash.mp3");
    audio.play();
    timeout = setTimeout(btn1to, 500);
}

function btn1to(){
    var btn1 = document.querySelector("#btn1");
    btn1.style.border = "5px solid rgb(0, 255, 225)";
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
}

function btn2(){
    var btn2 = document.querySelector("#btn2");
    btn2.style.border = "5px solid rgb(0, 255, 51)";
    btn2.style.backgroundColor = "rgb(111, 0, 76)";
    btn2.style.color = "white";
    var audio = new Audio("./Resources/sounds/kick-bass.mp3");
    audio.play();
    timeout = setTimeout(btn2to, 500);
}

function btn2to(){
    var btn2 = document.querySelector("#btn2");
    btn2.style.border = "5px solid rgb(0, 255, 225)";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "black";
}

function btn3(){
    var btn3 = document.querySelector("#btn3");
    btn3.style.border = "5px solid rgb(0, 255, 51)";
    btn3.style.backgroundColor = "rgb(111, 0, 76)";
    btn3.style.color = "white";
    var audio = new Audio("./Resources/sounds/snare.mp3");
    audio.play();
    timeout = setTimeout(btn3to, 500);
}

function btn3to(){
    var btn3 = document.querySelector("#btn3");
    btn3.style.border = "5px solid rgb(0, 255, 225)";
    btn3.style.backgroundColor = "white";
    btn3.style.color = "black";
}

function btn4(){
    var btn4 = document.querySelector("#btn4");
    btn4.style.border = "5px solid rgb(0, 255, 51)";
    btn4.style.backgroundColor = "rgb(111, 0, 76)";
    btn4.style.color = "white";
    var audio = new Audio("./Resources/sounds/tom-1.mp3");
    audio.play();
    timeout = setTimeout(btn4to, 500);
}

function btn4to(){
    var btn4 = document.querySelector("#btn4");
    btn4.style.border = "5px solid rgb(0, 255, 225)";
    btn4.style.backgroundColor = "white";
    btn4.style.color = "black";
}

function btn5(){
    var btn5 = document.querySelector("#btn5");
    btn5.style.border = "5px solid rgb(0, 255, 51)";
    btn5.style.backgroundColor = "rgb(111, 0, 76)";
    btn5.style.color = "white";
    var audio = new Audio("./Resources/sounds/tom-2.mp3");
    audio.play();
    timeout = setTimeout(btn5to, 500);
}

function btn5to(){
    var btn5 = document.querySelector("#btn5");
    btn5.style.border = "5px solid rgb(0, 255, 225)";
    btn5.style.backgroundColor = "white";
    btn5.style.color = "black";
}

function btn6(){
    var btn6 = document.querySelector("#btn6");
    btn6.style.border = "5px solid rgb(0, 255, 51)";
    btn6.style.backgroundColor = "rgb(111, 0, 76)";
    btn6.style.color = "white";
    var audio = new Audio("./Resources/sounds/tom-3.mp3");
    audio.play();
    timeout = setTimeout(btn6to, 500);
}

function btn6to(){
    var btn6 = document.querySelector("#btn6");
    btn6.style.border = "5px solid rgb(0, 255, 225)";
    btn6.style.backgroundColor = "white";
    btn6.style.color = "black";
}

function btn7(){
    var btn7 = document.querySelector("#btn7");
    btn7.style.border = "5px solid rgb(0, 255, 51)";
    btn7.style.backgroundColor = "rgb(111, 0, 76)";
    btn7.style.color = "white";
    var audio = new Audio("./Resources/sounds/tom-4.mp3");
    audio.play();
    timeout = setTimeout(btn7to, 500);
}

function btn7to(){
    var btn7 = document.querySelector("#btn7");
    btn7.style.border = "5px solid rgb(0, 255, 225)";
    btn7.style.backgroundColor = "white";
    btn7.style.color = "black";
}

document.addEventListener("keydown", function(event){
    var control = event.key;
    switch(control){
            case 'w':
                btn1();
                break;
            case 'a':
                btn2();
                break;
            case 's':
                btn3();
                break;
            case 'd':
                btn4();
                break; 
            case 'f':
                btn5();
                break;
            case 'g':
                btn6();
                break;
            case 'h':
                btn7();
                break;
            default:
                break; 
    }
})