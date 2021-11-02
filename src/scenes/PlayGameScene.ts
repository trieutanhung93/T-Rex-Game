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

    private velocity: number;
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
    }
      
    
    create(): void{
        console.log("PlayGameScene: Create");

        // Animation set
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 0, 1, 2 ] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 0 ] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNumbers('trex', { frames: [ 3, 4 ] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('brid', { frames: [ 0, 1 ] }),
            frameRate: 4,
            repeat: -1
        });

        this.ground = new Ground(this, 0, 350, 'ground');

        this.player = new Player(this, 25, 200, 'trex');

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
    }

    update(): void{
        if(this.player.getDead()==false){
            this.score++;

            //set velocity
            this.velocity = 200 + Math.floor(this.score/200)*20;

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
        let type = this.random(0,1);
        if(type == 0){
            var cactus = new Cactus(this, 650, 310, 'cactus', this.velocity);
            this.obstacles.add(cactus);
        }
        else{
            var height = this.random(250, 280)
            var brid = new Bird(this, 650, height, 'brid', this.velocity);
            this.obstacles.add(brid);
        }
    }

    private swapCloud(){
        this.physics.world.wrap(this.cloud);
    }

    private random(min: number, max: number): number{
        return Math.round(Math.random()*(max-min)+min);
    }
}