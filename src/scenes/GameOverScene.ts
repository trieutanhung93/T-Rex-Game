import Phaser = require("phaser");

export class GameOverScene extends Phaser.Scene{
    constructor(){
        console.log("GameOverScene");
        super({
            key: 'GameOverScene'
        })
    }
}