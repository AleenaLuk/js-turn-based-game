//Dropdown button
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const player = document.querySelectorAll('.chosen-player')
const fightButton = document.querySelector('.fight-button');

// function enableButtons() {
// 	fightButton.disabled = false;
// }

// const diceRoller = function(sides, rolls) {
//   let sum = 0;
//   for(i = 0; i <= rolls; i++) {
//     sum += Math.floor(Math.random() * sides)
//   }
// }


//generate a random enemy (3 enemies)
function randomEnemy(max, min){

  if(min === undefined || min === '' || min === null){

    min = 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
}
console.log('you are battling against player number', randomEnemy(4, 1));

function Player(name, attack, defense, health) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;
  this.attackStat = attack * 5;
  this.hitPoints = health * 10;
  this.defenseStat = defense * 5;
}

function Enemy(name, attack, defense, health) {
  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;
  this.attackStat = attack * 5;
  this.hitPoints = health * 10;
  this.defenseStat = defense * 5;
}

Player.prototype.attack = function() {
  return this.attackStat + diceRoller(this.attackStat, 1);
}

Player.prototype.defense = function() {
  return this.defenseStat
}

Player.prototype.death {
  if(player.hitpoint <= 0) {
    alert(`You have been defeated!`)
  }
}

Enemy.prototype.attack = function() {
  return this.attackStat + diceRoller(this.attackStat, 1)
}

Enemy.prototype.defense = function() {
  return this.defenseStat
}

Enemy.prototype.death {
  if(enemy.hitpoint <= 0) {
    alert(`You have won!`)
  }
}

function Game({player, enemy}) {
  this.player= new Player(player)
  this.enemy = new Enemy(enemy)
}

function attack(event) {
  console.log(`Fight`)
}

function player_select(event) {
  console.log(`Your player`)
}

player.forEach(function(button) {
  button.addEventListener('click', player_select)
})



fightButton.addEventListener('click', attack)


let players = []

let player1 = new Player("Charmander", 5, 5, 8)
players.push(player1)
let player2 = new Player("Squirtle", 3, 7, 9)
players.push(player2)
let player3 = new Player("Charmeleon", 7, 3, 5)
players.push(player3)

let enemies = []

let enemy1= new Enemy("Grunt", 2, 5, 7)
enemies.push(enemy1)
let enemy2 = new Enemy("Rain", 4, 7, 9)
enemies.push(enemy2)
let enemy3 = new Enemy("Boss", 6, 9, 10)
enemies.push(enemy3)

//healthbars
let player_health = document.getElementById("player-health")
player_health.value -= 10;

let enemy_health = document.getElementById("enemy-health")
enemy_health.value -= 10;
