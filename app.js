// enemies array
var enemies = ['Boss', 'Zombie','Plant', 'Gremlin', 'FlyingSheep', 'FlyingMonkey', 'BullBlob', 'Blob'];

// Stored Data Variables
var currentEnemy = 7;
var nextEnemy = 6;
var enemy = new Object();
    enemy.currentEnemy = 0; 
    enemy.currentHealth = 100;

var damageLevel = 10;
var hero = {currentHealth: 100};
var calculatedDamage = 0;

// State Variables
var heroTurn = true;

// var hitDamage = calculateDamage;

// Equipped Weapons
var weaponSword = document.getElementById('weaponSword');
var weaponAxe = document.getElementById('weaponAxe');
var weaponHammer = document.getElementById('weaponHammer');
var hitDamage;

// Bar fills 
var enemyHealthBarFill = document.getElementById('enemyHealthBarFill');


// functions
function doesItWork (){
    console.log("success!");
}

function calculateHitDamage() {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
}

function lowerEnemyHealth () {
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
}

function loadNextEnemy() {
    nextEnemy = Math.floor(Math.random() * 7);
    // console.log(currentEnemy);
    // console.log(nextEnemy);
    document.getElementById("enemy" + enemies[currentEnemy]).setAttribute("id", ("enemy" + enemies[nextEnemy]));
    currentEnemy = nextEnemy;
    //console.log(currentEnemy);
    enemy.currentHealth = 100;
   // console.log(enemy.currentHealth);
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth) + "%";
}

function adjustHealth() {
    if (heroTurn == true)
    {
    calculateHitDamage();
    lowerEnemyHealth();
   if (enemy.currentHealth <= 5) {
       loadNextEnemy();
   }
    heroTurn == false;
}
}
   
/* function adjustHealth () {
    if (heroTurn == true)
    {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
   if (enemy.currentHealth <= 0) {
       loadNextEnemy();
   }
    heroTurn == false;
}
    if (heroTurn == false) {
    
} */
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

weaponSword.addEventListener("click", adjustHealth);
    
/*
weaponSword.addEventListener('click', function() {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
   if (enemy.currentHealth <= 0) {
       loadNextEnemy();
   }
    doesItWork();
 }); 
*/
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

