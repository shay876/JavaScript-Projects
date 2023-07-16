
//display global variable
var X = 5;
function function_AddNumbers_1(){
    document.getElementById("globalVariable").innerHTML=30 + X;
}
function function_AddNumbers_2(){
    document.getElementById("globalVariable").innerHTML=20 + X;
}

function_AddNumbers_1();
function_AddNumbers_2();


//display local variable
function function_AddNumbers_3(){
    var Y = 7;
    document.getElementById("localVariable").innerHTML=30 + Y;
}
function_AddNumbers_3();


//Use if statement and Date.getHours() method

function get_Date(){
    if (new Date().getHours() < 18 ) {
        document.getElementById("Greeting").innerHTML = 
        "How was your day today?";
    }
}

//Use else statement for age verification

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
    else {
        Vote = "You are not old enough to vote";
    }
document.getElementById("How_old_are_you").innerHTML = Vote;
}


//Else If statement to get time of day and display greeting

function Time_Function(){

    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0){
        Reply = "It's morning!";
    }

    else if (Time > 12 == Time < 18){
        Reply = "It's afternoon!";
    }
    else { Reply = "It's evening!";}

    document.getElementById("time_of_day")
    .innerHTML = Reply;
}