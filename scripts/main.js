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
const fightButton= document.querySelector('.fight-button');


function Player(name, power, health) {
  this.name = name;
  this.power = power;
  this.health = health;
}

function Enemy(name, power, health) {
  this.name = name;
  this.power = power;
  this.health = health;
}

function Game({player, enemy}) {
  this.player= new Player(player)
  this.enemy = new Enemy(enemy)
}

Game.prototype.play = function() {
  player.forEach(function(button) {
    button.addEventListener('click', attack)
  })
}

// Game.prototype.play = function() {
//   fightButton.addEventListener('click', this.Game)
//   }

fightButton.addEventListener('click', this.Game);

//  Player(Game){ //create
//   const name: ["Charmander", "Squirtle", "Charmelion"];
//   const power: 20;
//   const health: 100;
// }
//
// Enemy(Game){
//   const name: ["Grunt", "Soldier", "Boss"];
//   const power: 10;
//   const health: 100;
// }



//healthbars
let player_health = document.getElementById("player-health")
function attack(fightbutton){
  enemy_health.value -= 10;
}
attack();

let enemy_health = document.getElementById("enemy-health")
if(//logic for after enemy takes damage){
player_health.value -= 10;
}
