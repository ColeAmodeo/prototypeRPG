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
var currentMonster;
var enemyIndex = 1;

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
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/mage.jpg')");
    $(".player-stats").find("h1").text("Sabrina, The Mage");
    $(".player-stats").find("h2").text("Health Points: " + mage.health);
    monsterPush();
    return mage.magePick;   
})
$("#vampire-btn").click(function(){
    vampire.vampirePick = true;
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/vampire.jpg')");
    $(".player-stats").find("h1").text("Regis, The Vampire");
    $(".player-stats").find("h2").text("Health Points: " + vampire.health);
    monsterPush();
    return vampire.vampirePick;
})
$("#warrior-btn").click(function(){
    warrior.warriorPick = true; 
    $('#game-box').css('display', "block");
    $('#hero-selection').css('display', "none"); 
    $(".player-portrait").css("background-image", "url('assets/images/warrior.jpg')");
    $(".player-stats").find("h1").text("Heimdall, The Warrior");
    $(".player-stats").find("h2").text("Health Points: " + warrior.health)
    monsterPush();
    return warrior.warriorPick;
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



//Game Logic

// Monster Selection (This is super cluttered but i couldn't figure out a cleaner way to do what i want)
function monsterPush() {
    if (enemyIndex === 1) {
        currentMonster = enemies.goblin;
        $(".grid1").css("background-image", "url('assets/images/goblin.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/goblin.png')");
        $(".enemy-stats").find("h1").text("Todd, The Goblin");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health);
        return currentMonster;
    } else if (enemyIndex === 2) {
        currentMonster = enemies.lizard;
        $(".grid1").css("background-image", "url('assets/images/dead.png')");
        $(".grid2").css("background-image", "url('assets/images/lizard.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/lizard.png')");
        $(".enemy-stats").find("h1").text("Feral Draconid");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health);    
        return currentMonster
    } else if (enemyIndex === 3) {
        currentMonster = enemies.werewolf;
        $(".grid2").css("background-image", "url('assets/images/dead.png')");
        $(".grid3").css("background-image", "url('assets/images/werewolf.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/werewolf.png')");
        $(".enemy-stats").find("h1").text("Cursed Werewolf");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health);
        return currentMonster; 
    } else if (enemyIndex === 4) {
        currentMonster = enemies.necromancer;
        $(".grid3").css("background-image", "url('assets/images/dead.png')");
        $(".grid4").css("background-image", "url('assets/images/necromancer.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/necromancer.png')");
        $(".enemy-stats").find("h1").text("Billy, The Necromancer");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health); 
        return currentMonster;
    } else if (enemyIndex === 5) {
        currentMonster = enemies.ghost;
        $(".grid4").css("background-image", "url('assets/images/dead.png')");
        $(".grid5").css("background-image", "url('assets/images/ghost.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/ghost.png')");
        $(".enemy-stats").find("h1").text("Super Spooky Ghost");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health); 
        return currentMonster;
    } else {
        currentMonster = enemies.shrek;
        $(".grid5").css("background-image", "url('assets/images/dead.png')");
        $(".grid6").css("background-image", "url('assets/images/shrek.png')");
        $(".enemy-portrait").css("background-image", "url('assets/images/shrek.png')");
        $(".enemy-stats").find("h1").text("THE GOD OF KINGS");
        $(".enemy-stats").find("h2").text("Health Points:" + currentMonster.health); 
        return currentMonster;
    }
}
$("#attack-btn").click(function(){
    
    
    monsterPush();
    
    
})
}); 