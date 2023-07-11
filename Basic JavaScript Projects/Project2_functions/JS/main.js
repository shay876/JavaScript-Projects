function My_First_Function() {

    var str="This is button text!";
    var str2="This is second button text!";

    document.getElementById("Button_text").innerHTML = str2;
}

//This function uses the += operator
function myFunction() {
    var sentence = "I am learning";  //create variable
    sentence += " a lot from this course"; //add += operator to add onto variable
    document.getElementById("Concatenate").innerHTML = sentence; //use to change innerHTML of element with id concatenate
}