import Phaser = require("phaser");

export class Cactus extends Phaser.GameObjects.Image{

    body: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, velocity: number){
        super(scene, x, y, texture);
        
        this.setScale(0.5);
        this.setOrigin(0,0);

        this.scene.physics.world.enable(this);
        this.body.allowGravity = false;
        this.body.setVelocityX(-velocity);
        this.body.setSize(20, 75);

        this.scene.add.existing(this);
    }
}