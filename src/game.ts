import Phaser = require("phaser");

var config = {
  type: Phaser.WEBGL,
  parent: "game",
  width: 600,
  height: 400,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: { debug: true },
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("background", "assets/sprites/background.png");
  this.load.image("trex-1", "assets/sprites/trex-1.png");
  this.load.image("trex-2", "assets/sprites/trex-2.png");
  this.load.image("brid", "assets/sprites/brid.png");
  this.load.image("cactus", "assets/sprites/cactus.png");
  this.load.image("cloud", "assets/sprites/cloud.png");
  this.load.image("button", "assets/sprites/gameOver.png");
  this.load.image("ground", "assets/sprites/ground.png");
}

var player: Phaser.Physics.Arcade.Sprite;
var ground;
var cursors: Phaser.Types.Input.Keyboard.CursorKeys;
var cactus: Phaser.Physics.Arcade.Sprite;
var cloud: Phaser.Physics.Arcade.Image;

function create() {
  //set camera
  this.cameras.main.setBackgroundColor(0xffffff);

  //set ground
  ground = this.physics.add.image(300, 325, "ground").refreshBody();
  ground = this.physics.add.staticGroup();

  //set player
  player = this.physics.add.sprite(25, 300, "trex-1").setScale(0.5);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //set cactus
  cactus = this.physics.add.sprite(525, 300, "cactus").setScale(0.5);
  cactus.setBounce(0.2);
  cactus.setCollideWorldBounds(true);
  cactus.setVelocity(-150, 0);

  cloud = this.physics.add.image(525, 200, 'cloud').setScale(0.5);
  cloud.setVelocity(-250, 0);

  //set input
  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, ground);
  this.physics.add.collider(player, cactus);
  this.physics.add.collider(cactus, ground);

  this.physics.add.overlap(player, cactus, gameOver, null, this);
}

function update() {

  this.physics.world.wrap(cactus, 0);
  this.physics.world.wrap(cloud, 0);

  if (cursors.up.isDown) {
    console.log("Yes");
    player.setVelocityY(-40);
  }
}

function gameOver(){
  console.log("GameOver");
  cactus.body.stop();
}

