import Phaser = require("phaser");

export class Player extends Phaser.GameObjects.Image{
    
    body: Phaser.Physics.Arcade.Body;

    private jumpKey: Phaser.Input.Keyboard.Key;
    private isDead: boolean;
    private isJump: boolean;
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number){
        super(scene, x, y, texture, frame);
        
        this.setScale(0.5);
        this.setOrigin(0,0);
        this.scene.add.existing(this);

        // variables
        this.isDead = false;
        this.isJump = false;

        // physics
        this.scene.physics.world.enable(this);
        this.body.setGravityY(1000);
        this.body.setSize(17, 12);

        // input
        this.jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
  
        this.scene.add.existing(this);

    }
    
    update(){
        // handle angle change
        if (this.angle < 30) {
            this.angle += 2;
        }

        // handle input
        if (this.jumpKey.isDown && !this.isJump) {
            this.isJump = true;
            this.body.setVelocityY(-350);
            this.scene.tweens.add({
            targets: this,
            props: { angle: -20 },
            duration: 150,
            ease: 'Power0'
            });
        } 
        else if (this.jumpKey.isUp && this.isJump) {
            this.isJump = false;
        }

        // check if off the screen
        if (this.y + this.height > this.scene.sys.canvas.height) {
            this.isDead = true;
        }
    }
}