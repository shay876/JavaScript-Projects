
//Make heighto ti ride function with ternary operators
function Ride_function(){
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall anough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}


//Use keywords new and this
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Color = Color;
    this.Vehicle_Year = Year;
}

var Jack = new Vehicle("Dodge", "viper", 2020 , "Red");
var Emily = new Vehicle("Jeep", "Trail Blazer", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971 , "Yellow");
function myFunction(){
    document.getElementById("Keywords_and_Constructors")
    .innerHTML = 
    "Erik drives a" + Erik.Vehicle_Color + "-colored " 
    + Erik.Vehicle_Model + " manufactured in"
    +Erik.Vehicle_Year;
}

//new keyword and object constructor assignment

function Pet(Species, Breed, Age, Color){
    this.Pet_Species = Species;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
    this.Pet_Color= Color;
}

var Susan = new Pet("Dog","Corgi", 5 ,"tan");
var Tony = new Pet("cat", "Persian", 7, "Seal point");
var Bobby = new Pet("Snake", "Python", 2, "green");
function petFunction(){
    document.getElementById("New_and_This")
    .innerHTML =
    "Bobby has a pet " + Bobby.Pet_Species + " that is a "
    + Bobby.Pet_Age + " year old "
    + Bobby.Pet_Breed + ", who is "
    + Bobby.Pet_Color;
}
