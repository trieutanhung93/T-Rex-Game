import Phaser = require("phaser");

export class Button extends Phaser.GameObjects.Image{

    body: Phaser.Physics.Arcade.Body;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number){
        super(scene, x, y, texture, frame);
        
        this.setScale(0.5);
        this.setOrigin(0,0);
        this.scene.add.existing(this);

        this.scene.add.existing(this);
    }
}