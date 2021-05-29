let player;

function Player(name, attack, health) {
  this.name = name;
  this.attack = attack;
  this.health = health;
}

const data = {
  "count": 3,
  "stats": [{
    name: "Charmander",
    description: "A small lizard like creature with a flame on it's tail",
    image: "./images/charmander.png"
  }, {
    name: "Squirtle",
    description: "A hero in a half shell with a propensity for water",
    image: "./images/squirtle.png"
  }, {
    name: "Bulbasaur",
    description: "A small dinosaur with a flower bulb growing out of it's back",
    image: "./images/bulbasaur.png"
  }]
}
