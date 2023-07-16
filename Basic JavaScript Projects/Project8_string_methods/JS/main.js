function makeSentence(){

    var part1 = "I can";
    var part2 = " make a";
    var part3 = " full sentence";
    var part4 = " using Javascript";
    var part5 = " concatenate method";
    var wholeSentence = part1.concat(part2,part3,part4,part5);
    document.getElementById("concat").innerHTML = wholeSentence;
}

// slice method to display portion of sentence

function sliceMethod(){
    var sentence = " My name is Shayla. I like pie";
    var section = sentence.slice(12,18);
    document.getElementById("slice").innerHTML= section;
}


// toUpperCase method

function toUpperCase(){
    let text1 = "Make this sentence uppercase";
    document.getElementById("uppercase").innerHTML=text1.toUpperCase();
}


// search method
function searchMethod(){
    let text1 = "Find the world blue in this sentence";

    document.getElementById("search").innerHTML= text1.search("blue");
}

// Return number as string
function stringMethod(){
    var X = 182;

    document.getElementById("numberToString").innerHTML= X.toString();
}

// Return precison number
function precisionMethod(){
    var X = 18293.9876543210;

    document.getElementById("precision").innerHTML= X.toPrecision(10);
}

// Return toFixed method-number to string and rounded to 2 decimal places
function toFixedMethod(){
    var X = 18293.9876543210;

    document.getElementById("fixed").innerHTML= X.toFixed(2);
}

// Return primitive value of number with valueOf method
function valueOfMethod(){
    var X = 15;

    document.getElementById("value").innerHTML= X.valueOf();
}