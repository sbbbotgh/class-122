var x = 0;
var y = 0;
var draw_circle = "";
var draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listning to you";
    recognition.start();
}

recognition.onresult = function(event){
        console.log(event);
        content = event.results[0][0].transcript;
        document.getElementById("status").innerHTML = "Speech has been recognized as " + content;
        if(content == "circle"){
            x = Math.floor(Math.random()*800);
            y = Math.floor(Math.random()*800);
            document.getElementById("status").innerHTML = "Work started";
            draw_circle = "set";
        }
        else if(content == "rectangle"){
            x = Math.floor(Math.random()*800);
            y = Math.floor(Math.random()*800);
            document.getElementById("status").innerHTML = "Work started";
            draw_rectangle = "set";
        }
}

function setup(){
    canvas = createCanvas(800, 800);
}

function draw(){
    if(draw_rectangle == "set"){
        rect( x, y, 80, 100);
        document.getElementById("status").innerHTML = "Rectangle had draw";
        draw_rectangle = "";

    }
    else if(draw_circle == "set"){
        radio = Math.floor(Math.random()*100);
        circle( x, y, radio);
        document.getElementById("status").innerHTML = "circle had draw";
        draw_circle = "";
    }
}