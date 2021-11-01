import Phaser = require("phaser");
import { Button } from "../objects/Button";

export class GameOverScene extends Phaser.Scene{

    private startKey: Phaser.Input.Keyboard.Key;
    private playBitmapText: Phaser.GameObjects.BitmapText;
    private restartButton: Phaser.GameObjects.Image;

    constructor(){
        console.log("GameOverScene");
        super({
            key: 'GameOverScene'
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

        this.playBitmapText = this.add.bitmapText(0, 200, 'font', "GAME OVER",20);
        this.playBitmapText.x = this.getCenterXPositionOfBitmapText(
            this.playBitmapText.width
        );
        this.playBitmapText.y = this.getCenterYPositionOfBitmapText(
            this.playBitmapText.height
        );

        this.restartButton = new Button(this, 0, 210, 'button');
        this.restartButton.x = this.getCenterXPositionOfBitmapText(
            this.restartButton.width
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