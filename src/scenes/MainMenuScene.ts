import Phaser = require("phaser");

export class MainMenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'MainMenuScene'
        })
    }

    init(): void{

    }

    preload(){
        this.load.image('trex-1', 'asset/sprites/trex-1.png');
        this.load.image('trex-2', 'asset/sprites/trex-2.png');
        this.load.image('brid', 'asset/sprites/brid.png');
        this.load.image('cactus', 'asset/sprites/cactus.png');
        this.load.image('cloud', 'asset/sprites/cloud.png');
        this.load.image('button', 'asset/sprites/gameOver.png');
        this.load.image('ground', 'asset/sprites/ground.png');
    }

    create(): void{

    }

    update(): void{

    }
}