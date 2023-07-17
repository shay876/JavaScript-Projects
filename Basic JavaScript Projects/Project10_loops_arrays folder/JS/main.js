//loop assignment
function Call_Loop(){
    var Digit = "";
    var y = 5;
    while (y < 20){
        Digit += "<br>" + y;
        y++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


//string length property

function stringLength(){
    var text1 = "Way to go, Captain America!";
    document.getElementById("length").innerHTML= text1.length
}


//For Loop

var Instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];

var Content = "";
var Y;

function forLoop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = Content;
}