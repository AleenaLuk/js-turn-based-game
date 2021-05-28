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
const fighButton= document.querySelector('.fight-button');


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
    button.addEventListener('click', this.Game)
  })
}

Game.prototype.play = function() {
  fightButton.addEventListener('click', this.Game)
  }

Game.prototype.fight = function() {
  
}



//healthbars
let player_health = document.getElementById("player-health")
player_health.value -= 10;

let enemy_health = document.getElementById("enemy-health")
enemy_health.value -= 10;
