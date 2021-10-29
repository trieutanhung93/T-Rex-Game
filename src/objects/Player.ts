import Phaser = require("phaser");

export class Player extends Phaser.GameObjects.Image{
    
    body: Phaser.Physics.Arcade.Body;

    private jumpKey: Phaser.Input.Keyboard.Key;
    private isJump: boolean;
    private duckKey: Phaser.Input.Keyboard.Key;
    private isDuck: boolean;
    private isDead: boolean;
    
    private buttonPress: Phaser.Sound.BaseSound;

    //private cody: Phaser.GameObjects.Sprite;

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
        this.body.setSize(50, 50);

        // input
        this.jumpKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.duckKey = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.S
        );

        this.scene.add.existing(this);

        this.buttonPress = this.scene.sound.add('button-press');

        //this.cody = this.scene.add.sprite(x, y, texture);
        //this.cody.play('run');
    }

    update(){

        // handle input
        console.log();
        if (this.jumpKey.isDown && !this.isJump) {
            this.isJump = true;
            this.body.setVelocityY(-500);
            this.buttonPress.play();
        } 
        if(this.body.velocity.y == 0){
            this.isJump = false;
        }

        if(this.duckKey.isDown && !this.isDuck){
            this.isDuck = true;
            //this.texture = 'trex-2.png';
        }
        else if(this.duckKey.isUp && this.isDuck){
            this.isDuck = false;
            //this.texture = 'trex-1.png';
        }
        console.log(this.isDuck);
    }

    public getDead(): boolean{
        return this.isDead;
    }
    public setDead(value: boolean): void{
        this.isDead = value;
    }
}