$(document).ready(function(){


var mage = {
    magePick: false,
    health: 300,
    attack: 8,
    magicAttack: function () {
        return (Math.floor(Math.random() * 50) + 20)
    },
    mana: 3,
    }
    
var vampire = {
    vampirePick: false,
    health: 450,
    attack: 5,
    mana: 3,
}
var warrior = {
    warriorPick: false,
    health: 600,
    attack: 5,
    mana: 3,
}
var enemies =  {
    goblin: {
        attack: monsterAttack(1),
        health: 50,
        defense: 1,
    },
    lizard: {
        attack: monsterAttack(3),
        health: 100,
        defense: 2,
    }, 
    werewolf: {
        attack: monsterAttack(3),
        health: 300,
        defense: 5,
    }, 
    necromancer: {
        attack: monsterAttack(5),
        health: 250,
        defense: 2,
    }, 
    ghost: {
        attack: monsterAttack(6),
        health: 350,
        defense: 10,
    } ,
    shrek: {
        attack: monsterAttack(10000),
        health: 420,
        defense: 100,
    }
}  
function monsterAttack(x){
    if (mage.magePick === true) {
    return (Math.floor((Math.random() * 10) * x) - 5)
    } else if (warrior.warriorPick === true) {
    return (Math.floor((Math.random() * 10) * x) - 10)
    } else {
    return (Math.floor((Math.random() * 10) * x) - 7)
    }

}

// Hero Selection
$("#mage-btn").click(function(){
    mage.magePick = true;
    vampire.vampirePick = false;
    warrior.warriorPick = false; 
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/mage.jpg')");
    return mage.magePick, vampire.vampirePick, warrior.warriorPick;
    
})
$("#vampire-btn").click(function(){
    mage.magePick = false;
    vampire.vampirePick = true;
    warrior.warriorPick = false; 
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/vampire.jpg')");
    return mage.magePick, vampire.vampirePick, warrior.warriorPick;
})   
$("#warrior-btn").click(function(){
    mage.magePick = false;
    vampire.vampirePick = false;
    warrior.warriorPick = true; 
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/warrior.jpg')");
    return magePick, vampirePick, warriorPick;
})
$(".mage").hover(function(){
    $("#hero-info").html("<p><u>Sabrina: The Mage</u></p> <p>A Powerful enchanter, specializes in dealing high damage</p> <p>Has the ability to unleash stored energy in a large concentrated burst</p>")
});
$(".warrior").hover(function(){
    $("#hero-info").html("<p><u>Heimdall: The Warrior</u></p> <p> Sturdy vanguard of the mountains, specializes in blocking the brunt of attacks. While dealing less damage. </p> <p> Has the special ability of tanking up and regenerating some lost Health Points. </p>")
});
$(".vampire").hover(function(){
    $("#hero-info").html("<p><u>Regis: The Vampire</u></p> <p> An ancient overseer, maintains an average ability of both attack and defense</p> <p>Possesses the ability to feed on his opponents, restoring life and dealing damage</p>" )
});
}); 


   
