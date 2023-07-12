
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

//Create a function that returns the result of a negation operator 
//to the paragraph element with the id “Math7”

function negationOperator_Function() {

    var Negation = 10;
    document.getElementById("Math7").innerHTML = -Negation;
}

//Create a function that uses increment operator
//to the paragraph element with the id “Math8”

function incrementOperator_Function() {

    var Increment = 5;
    Increment++;
    document.getElementById("Math8").innerHTML = Increment;
}

//Create a function that uses decrement operator 
//to the paragraph element with the id “Math9”

function decrementOperator_Function() {

    var Decrement = 5;
    Decrement--;
    document.getElementById("Math9").innerHTML = Decrement;
}


//Create a function that displays random number between 0 and 500 
//to the paragraph element with the id “Math10”

function mathRandom_Function() {

    
    document.getElementById("Math10").innerHTML = Math.random()*500;
}