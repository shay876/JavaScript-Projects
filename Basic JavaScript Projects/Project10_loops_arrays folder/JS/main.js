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


//document.getelementById().innerHTML Assignment

function arrayFunction(){
    var pet = [];
    pet[0]="Dog";
    pet[1]="Cat";
    pet[2]="Ferret";
    pet[3]="Snake";

    document.getElementById("Array").innerHTML = "Here we display a pet from an array: "
    + pet[3] + ".";
}