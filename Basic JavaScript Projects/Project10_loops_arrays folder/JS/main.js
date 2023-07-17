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