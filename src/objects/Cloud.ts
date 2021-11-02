import Phaser = require("phaser");

export class Cloud extends Phaser.GameObjects.Image{

    body: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number){
        super(scene, x, y, texture, frame);
        
        this.setOrigin(0,0);

        this.scene.physics.world.enable(this);
        this.body.allowGravity = false;
        this.body.setVelocityX(-200);

        var scales: number[] = [0.5, 1, 1.25];
        this.setScale(scales[this.random(0,2)]);
        this.scene.add.existing(this);
    }
    private random(min: number, max: number): number{
        return Math.round(Math.random()*(max-min)+min);
    }
}