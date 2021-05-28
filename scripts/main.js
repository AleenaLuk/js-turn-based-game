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
  
}


//healthbars
let player-health = document.getElementById("health")
health.value -= 10;

let enemy-health = document.getElementById("health")
health.value -= 10;
