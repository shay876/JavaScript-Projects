
//Use type of to display what kind of data
document.write(typeof 6);

//How to display number infinity
function display_Infinity() {
    document.getElementById("Infinity")
    .innerHTML=document.write(2E310);
}

//How to display number negative infinity
function display_negativeInfinity() {
    document.getElementById("negativeInfinity")
    .innerHTML=document.write(-3E310);
    }

//Display boolean true
function display_True() {
    document.getElementById("True")
    .innerHTML=document.write(10>2);
    }
//Display boolean false        
function display_False() {
    document.getElementById("False")
    .innerHTML=document.write(10<2);
    }

//Use Console Log
console.log(9+27);

//Display false using console log

console.log(5<4);

//Use == to display true data match
function equalsDisplay_True() {
    document.getElementById("equalsTrue")
    .innerHTML=document.write(10==10);
    }

//Use == to display false data match
function equalsDisplay_False() {
    document.getElementById("equalsFalse")
    .innerHTML=document.write(10==5);
    }

//Use === to display true data type and value match
function tripleEqualsDisplay_True() {
    document.getElementById("tripleEqualsTrue")
    .innerHTML=document.write(10===10);
    }

//Use === to display false data match from differnt data type and value
function tripleEqualsDisplay_False() {
    document.getElementById("tripleEqualsFalse")
    .innerHTML=document.write(10==="5");
    }

//Use === to display false data match because different data type
function tripleEqualsDisplay_False2() {
    document.getElementById("tripleEqualsFalse2")
    .innerHTML=document.write(10==="10");
    }

//Use AND operator to display false
function andOperatorFalse() {
    document.getElementById("andOperatorFalse")
    .innerHTML=document.write(10>11 && 5>4);
    }


//Use AND operator to display true
function andOperatorTrue() {
    document.getElementById("andOperatorTrue")
    .innerHTML=document.write(10>5 && 6<7);
    }


//Use OR operator to display false
function orOperatorFalse() {
    document.getElementById("andOperatorFalse")
    .innerHTML=document.write(10>11 || 5<4);
    }


//Use OR operator to display true
function orOperatorTrue() {
    document.getElementById("andOperatorTrue")
    .innerHTML=document.write(10>5 || 6<7);
    }

//Use NOT operator to display true
function notOperatorTrue() {
    document.getElementById("notOperatorTrue")
    .innerHTML=!(5>10);
    }

    //Use NOT operator to display false
function notOperatorFalse() {
    document.getElementById("notOperatorFalse")
    .innerHTML=!(5<10);
    }

    