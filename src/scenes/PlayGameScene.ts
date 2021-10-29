import Phaser = require("phaser");
import { Bird } from "../objects/Brid";
import { Cactus } from "../objects/Cactus";
import { Cloud } from "../objects/Cloud";
import { Ground } from "../objects/Ground";
import { Player } from "../objects/Player";

export class PlayGameScene extends Phaser.Scene{

    private ground: Ground;
    private player: Player;
    
    private obstacles: Phaser.GameObjects.Group;
    private timerEvent: Phaser.Time.TimerEvent;

    private score: number;
    private scoretext: Phaser.GameObjects.BitmapText;
    private highscore: number;
    private highscoretext: Phaser.GameObjects.BitmapText;

    private cloud: Cloud;

    //private buttonPress: Phaser.Sound.BaseSound;
    private hit: Phaser.Sound.BaseSound;

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

        //Load font
        this.load.bitmapFont('font', 'assets/font/font.png', 'assets/font/font.fnt');

        //Load audio
        this.load.audio('button-press','assets/audio/button-press.mp3');
        this.load.audio('hit','assets/audio/hit.mp3');
        this.load.audio('hit','assets/audio/score-reached.mp3');

        //Load sprite
        this.load.atlas('t-rex', 'assets/sprites/trex.png', 'assets/sprites/trex.json');

    }
      
    
    create(): void{
        console.log("PlayGameScene: Create");

        this.ground = new Ground(this, 0, 350, 'ground');

        this.player = new Player(this, 25, 200, 'trex-1');

        this.scoretext = this.add.bitmapText(25, 20, 'font', "SCORE: "+ this.score,15);
        this.highscoretext = this.add.bitmapText(400, 20, 'font', "HIGH SCORE: "+ this.highscore,15);

        this.obstacles = this.add.group({});
        this.timerEvent = this.time.addEvent({
            delay: 1500,
            callback: this.swapObstacle,
            callbackScope: this,
            loop: true
        })

        this.cloud = new Cloud(this, 650, 200, 'cloud');

        this.physics.add.collider(this.player, this.ground);

        //this.buttonPress = this.sound.add('button-press');
        this.hit = this.sound.add('hit');


        // Animation set
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });
    }

    update(): void{
        //console.log("PlayGameScene: Update");
        if(this.player.getDead()==false){
            this.score++;
            if(this.score > this.highscore){
                this.highscore = this.score;
            }
            this.scoretext.text = "SCORE: "+ this.score;
            this.highscoretext.text = "HIGH SCORE: "+ this.highscore;
    
            this.swapCloud();

            this.player.update();
            
            this.physics.overlap(
                this.player,
                this.obstacles,
                function(){
                    this.player.setDead(true);
                },
                null,
                this
            )
        }
        else{
            this.hit.play();
            this.scene.start('GameOverScene');
        }
        
    }

    private swapObstacle(){
        console.log("swapObstacle");
        let type = this.random(0,1);
        if(type == 0){
            var cactus = new Cactus(this, 650, 310, 'cactus');
            this.obstacles.add(cactus);
        }
        else{
            var brid = new Bird(this, 650, 290, 'brid');
            this.obstacles.add(brid);
        }
    }

    private swapCloud(){
        console.log("swapCloud");
        this.physics.world.wrap(this.cloud);
    }

    private random(min: number, max: number): number{
        return Math.round(Math.random()*(max-min)+min);
    }
}