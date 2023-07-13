function my_Dictionary(){
    var Mammal = {
        Species: "Dog",
        Color: "Black",
        Breed:"Lab",
        Sound: "Bark",
    };


    var Reptile = {
        Species:"Snake",
        Color:"Green",
        Breed:"Python",
        Sound:"Hiss",
    };

    var Bird = {
        Species:"Eagle",
        Color:"Brown",
        Breed:"Golden",
        Sound:"Tseer",
    };
//delete KVP reptile breed
    delete Reptile.Breed;
document.getElementById("Dictionary").innerHTML=Reptile.Breed;
    
}