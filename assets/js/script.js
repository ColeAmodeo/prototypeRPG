$(document).ready(function(){


var magePick = false;
var vampirePick = false;
var warriorPick = false; 
var enemies =  {
    goblin: {
        attack: attackFunction(1),
        health: 50,
        defense: 1,
    },
    lizard: {
        attack: attackFunction(3),
        health: 100,
        defense: 2,
    }, 
    werewolf: {
        attack: attackFunction(3),
        health: 300,
        defense: 5,
    }, 
    necromancer: {
        attack: attackFunction(5),
        health: 250,
        defense: 2,
    }, 
    ghost: {
        attack: attackFunction(6),
        health: 350,
        defense: 10,
    } ,
    shrek: {
        attack: attackFunction(10000),
        health: 420,
        defense: 100,
    }
}  
function attackFunction(x){
    return Math.floor((Math.random() * 10) * x)

}

// Hero Selection
$(".mage-btn").click(function(){
    magePick = true;
    vampirePick = false;
    warriorPick = false; 
    return magePick, vampirePick, warriorPick;

    
})
$(".vampire-btn").click(function(){
    vampirePick = true;
    warriorPick = false;
    magePick = false;
})   
$(".warrior-btn").click(function(){
    warriorPick = true;
    vampirePick = false;
    magePick = false;
})
}); 


    $(".mage-btn").css("background-image", "url('assets/images/mage.jpg')");
