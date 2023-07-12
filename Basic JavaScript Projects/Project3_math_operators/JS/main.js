
//Create a function that returns the result of an addition operation 
//to the paragraph element with the id “Math”

function addition_Function() {

    var addition = 6+4;
    document.getElementById("Math").innerHTML = "6+4=" + addition;
}

//Create a function that returns the result of a subtraction operation 
//to the paragraph element with the id “Math2”

function subtraction_Function() {

    var Subtraction = 6-4;
    document.getElementById("Math2").innerHTML = "6-4=" + Subtraction;
}


//Create a function that returns the result of a multiplication operation 
//to the paragraph element with the id “Math3”

function multiplication_Function() {

    var Multiplication = 6*4;
    document.getElementById("Math3").innerHTML = "6 x 4=" + Multiplication;
}

//Create a function that returns the result of a division operation 
//to the paragraph element with the id “Math4”

function division_Function() {

    var Division = 6/2;
    document.getElementById("Math4").innerHTML = "6 divided by 2=" + Division;
}



//Create a function that returns the result of a division operation 
//to the paragraph element with the id “Math5”

function moreMath_Function() {

    var More = (1+2)*10/2-5;
    document.getElementById("Math5").innerHTML = "1 plus 2, times 10, divided by two, subtract 5 equals" + More;
}


//Create a function that returns the result of a modulus or remainder 
//to the paragraph element with the id “Math6”

function modulusOperator_Function() {

    var Modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of " + Modulus;
}