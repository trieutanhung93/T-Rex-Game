import Phaser = require("phaser");
import { Ground } from "../objects/Ground";
import { Player } from "../objects/Player";

export class PlayGameScene extends Phaser.Scene{

    private ground: Ground;
    private player: Player;
    
    private score: number;
    private scoretext: Phaser.GameObjects.BitmapText;
    private highscore: number;
    private highscoretext: Phaser.GameObjects.BitmapText;

    constructor(){
        console.log("PlayGameScene");
        super({
            key: 'PlayGameScene'
        })
    }

    init(): void{
        console.log("PlayGameScene: Init");
        this.score = 0;
        this.highscore = 0;
    }

    preload() {
        console.log("PlayGameScene: Preload");
        this.load.image("background", "assets/sprites/background.png");
        this.load.image("trex-1", "assets/sprites/trex-1.png");
        this.load.image("trex-2", "assets/sprites/trex-2.png");
        this.load.image("brid", "assets/sprites/brid.png");
        this.load.image("cactus", "assets/sprites/cactus.png");
        this.load.image("cloud", "assets/sprites/cloud.png");
        this.load.image("button", "assets/sprites/gameOver.png");
        this.load.image("ground", "assets/sprites/ground.png");

        this.load.bitmapFont('font', 'assets/font/font.png', 'assets/font/font.fnt');
    }
      
    
    create(): void{
        console.log("PlayGameScene: Create");

        this.ground = new Ground(this, 0, 350, 'ground');

        this.player = new Player(this, 25, 200, 'trex-1');

        this.scoretext = this.add.bitmapText(25, 20, 'font', "SCORE: "+ this.score,15);
        this.highscoretext = this.add.bitmapText(400, 20, 'font', "HIGH SCORE: "+ this.highscore,15);
    }

    update(): void{
        console.log("PlayGameScene: Update");
        this.score++;
        if(this.score > this.highscore){
            this.highscore = this.score;
        }
        this.scoretext.text = "SCORE: "+ this.score;
        this.highscoretext.text = "HIGH SCORE: "+ this.highscore;
    }
}