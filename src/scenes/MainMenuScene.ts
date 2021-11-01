import Phaser = require("phaser");

export class MainMenuScene extends Phaser.Scene{

    private startKey: Phaser.Input.Keyboard.Key;
    private playBitmapText: Phaser.GameObjects.BitmapText;

    constructor(){
        console.log("MainMenuScene");
        super({
            key: 'MainMenuScene'
        })
    }

    init(){
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.startKey.isDown = false;
    }

    preload(){
        console.log("MainMenuScene: Preload");

        this.load.bitmapFont('font', 'assets/font/font.png', 'assets/font/font.fnt');
    }

    create(){
        console.log("MainMenuScene: Create");

        this.playBitmapText = this.add.bitmapText(0, 200, 'font', "PRESS SPACE TO START GAME",20);
        this.playBitmapText.x = this.getCenterXPositionOfBitmapText(
            this.playBitmapText.width
        );
        this.playBitmapText.y = this.getCenterYPositionOfBitmapText(
            this.playBitmapText.height
        );
    }

    update(){
        console.log("MainMenuScene: Update");
        if (this.startKey.isDown) {
            this.scene.start('PlayGameScene');
        }
    }

    private getCenterXPositionOfBitmapText(width: number): number {
        return this.sys.canvas.width / 2 - width / 2;
    }
    
    private getCenterYPositionOfBitmapText(height: number): number {
        return this.sys.canvas.height / 2 - height / 2;
    }
}