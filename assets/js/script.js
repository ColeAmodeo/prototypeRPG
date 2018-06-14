$(document).ready(function(){


var mage = {
    magePick: false,
    health: 325,
    attack: 20,
    magicAttack: function () {
        return (Math.floor(Math.random() * 50) + 20)
        }, 
        
    
    mana: 3,
    }
    
var vampire = {
    vampirePick: false,
    health: 450,
    attack: 16,
    mana: 3,
}
var warrior = {
    warriorPick: false,
    health: 600,
    attack: 12,
    mana: 3,
}
var enemies =  {
    goblin: {
        attack: 2,
        health: 50,
        defense: 1,
    },
    lizard: {
        attack: 3,
        health: 100,
        defense: 2,
    }, 
    werewolf: {
        attack: 3,
        health: 250,
        defense: 5,
    }, 
    necromancer: {
        attack: 5,
        health: 250,
        defense: 2,
    }, 
    ghost: {
        attack: 4,
        health: 350,
        defense: 10,
    } ,
    //SHREK CANNOT BE DEFEATED HE IS ETERNAL
    shrek: {
        attack: 10000,
        health: 420,
        defense: 100,
    }
}  
var currentMonster;
var enemyIndex = 1;

function playerAttack(x){
    if (mage.magePick === true) {
        return (Math.floor((Math.random() * 5) + mage.attack) - currentMonster.defense)
    } else if (warrior.warriorPick === true) {
        return (Math.floor((Math.random() * 5) + warrior.attack) - currentMonster.defense)
    } else {
        return (Math.floor((Math.random() * 5) + vampire.attack) - currentMonster.defense)
    }
}
function monsterAttack(x){
    if (mage.magePick === true) {
    var dmg = (Math.floor((Math.random() * 5) * x) - 5)
        if (dmg < 0) {
            return 1
        } else return dmg
    } else if (warrior.warriorPick === true) {
    var dmg = (Math.floor((Math.random() * 5) * x) - 10)
    if (dmg < 0) {
        return 1
    } else return dmg
    } else {
    var dmg = (Math.floor((Math.random() * 5) * x) - 7)
    if (dmg < 0) {
        return 1
    } else return dmg
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
    $("#hero-info").html("<p><u>Sabrina: The Mage</u></p> <p>A Powerful enchanter, specializes in dealing high damage</p> <p>Has the ability to unleash stored energy in a large concentrated burst, which bypasses all defense!</p>")
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
    var myDMG = playerAttack()
    var enemyDMG = monsterAttack(currentMonster.attack)

    currentMonster.health = currentMonster.health - myDMG;
    $('.enemy-stats').find('h2').text("Health Points:" + currentMonster.health)
    $('#player-dmg').text("You dealt " + myDMG + "damage!")
    mage.health = mage.health - enemyDMG;
    $('.player-stats').find('h2').text('Health Points:' + mage.health)
    $('#enemy-dmg').text("You were dealt " + enemyDMG + "damage!")

    if (currentMonster.health <= 0){
        enemyIndex++
        monsterPush();
    } else if (mage.health <= 0) {
        gameReset();
    } else return currentMonster.health, mage.health;
        
})

$("#special-btn").click(function(){
    if (mage.mana > 0) {
        mage.mana--
    $("#mana").text("Mana: " + mage.mana);
        var myDMG = mage.magicAttack();
        var enemyDMG = monsterAttack(currentMonster.attack);
        currentMonster.health = currentMonster.health - myDMG;
    $('.enemy-stats').find('h2').text("Health Points:" + currentMonster.health);
    $('#player-dmg').text("You dealt " + myDMG + "damage!");
    mage.health = mage.health - enemyDMG;
    $('.player-stats').find('h2').text('Health Points:' + mage.health);
    $('#enemy-dmg').text("You were dealt " + enemyDMG + "damage!");

    if (currentMonster.health <= 0){
        enemyIndex++
        monsterPush();
    } else if (mage.health <= 0) {
        gameReset();
    } else return currentMonster.health, mage.health;

    } else alert("YOU HAVE NO MANA LEFT!")

})



function gameReset() {
    alert("YOU HAVE DIED LOL");
    location.reload();
}
});
