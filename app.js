var hero, enemy, spell, inventoryItem;


/* Enemies
var blob = document.getElementById('enemyBlob');
var bullBlob = document.getElementById('enemyBullBlob');
var flyingMonkey = document.getElementById('enemyFlyingMonkey');
var flyingSheep = document.getElementById('enemyFlyingSheep');
var gremlin = document.getElementById('enemyGremlin');
var plant = document.getElementById('enemyPlant');
var zombie = document.getElementById('enemyZombie');
var boss = document.getElementById('enemyBoss');
*/


// enemies array
var enemies = [document.getElementById('enemyBlob'), document.getElementById('enemyBullBlob'), document.getElementById('enemyFlyingMonkey'), flyingSheep = document.getElementById('enemyFlyingSheep'), gremlin = document.getElementById('enemyGremlin'), document.getElementById('enemyPlant'), document.getElementById('enemyZombie'), document.getElementById('enemyBoss')];

var currentEnemy = 0;

// Stored Data Variables
var enemy = new Object();
    enemy.currentEnemy = 0; 
    enemy.currentHealth = 100;


var hero = {currentHealth: 100};
var calculatedDamage = 0;
//var damageFactor
// var hitDamage = calculateDamage;

// Equipped Weapons
var weaponSword = document.getElementById('weaponSword');
var weaponAxe = document.getElementById('weaponAxe');
var weaponHammer = document.getElementById('weaponHammer');
var currentEnemy = 7;
var hitDamage;

// Bar fills 
var enemyHealthBarFill = document.getElementById('enemyHealthBarFill');


// functions
function doesItWork (){
    console.log("success!");
}

/*function calculateDamage() {
   var damageFactor = calculateDamageFactor();
      return;
} */
function calculateDamage(currentenemy) {
    damageFactor = currentenemy;
     Math.random() * (6 * damageFactor +1);
}
function hitHealth () {
    document.getElementById('enemyFlyingSheep').style.width = "'" + enemy.currentEnemyHealth - calculatedDamage + "%'";
} 

weaponSword.addEventListener('click', function() {
    hitDamage = Math.floor(Math.random() * (6 * (currentEnemy + 1)));
    document.getElementById('enemyHealthBarFill').style.width = "'" + (enemy.currentHealth - hitDamage) + "%'";

    console.log(hitDamage);
                                                 doesItWork();
                                                 });

/* weaponSword.addEventListener('click', function() {
    tempDamage = calculateDamage();
    document.getElementById('enemyFlyingSheep').style.width = "'" + enemy.currentEnemyHealth - tempDamage + "%'";
                                                 doesItWork();
                                                 });
                                                 */

/*
function test(){
if (1 == 1) {switch(enemy.currentEnemy) {
        case 0:
            16;
            break;
        case 1:
            damageFactor === 32;
            break;  
        case 2:
            damageFactor === 32;
            break;
        case 3:
            damageFactor === 32;
            break;
        case 4:
            damageFactor === 32;
            break;
        case 5:
            damageFactor === 32;
            break;
        case 6:
            damageFactor === 32;
            break;
        case 7:
            damageFactor === 40;
            break;
    default:
    alert("calculateDamageFactor didn't work! ln. 44 to 74");
    
}
            }
*/



/* calculateDamage();
console.log(calculateDamage); */
//click weapon to 

