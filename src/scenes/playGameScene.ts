import {Canvas} from "../abstracts/Canvas";
import { SceneManager } from "../abstracts/SceneManager";
import { GameOverScene } from "./GameOverScene";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class PlayGameScene extends Screen{
    
    scoreText: Score;
    highscoreText: Score;
    score: number;
    highscore: number;

    initialSpawnTimer:number =200;
    spawnTimer: number = this.initialSpawnTimer;
    gameSpeed: number;
    player: Player;
    isDead = false;

    ground: Ground;
    cloud: Cloud
    clouds: Cloud[] = [];

    brid : Brid;
    cactus: Cactus;
    obstacles = [];

    constructor(){
        //super();
        this.scoreText = new Score("Score: 0", 25, 25);
        this.highscore = 0;
        this.score = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Score("Highscore: " + this.highscore, Canvas.width - 200, 25);
        this.player = new Player(25,Canvas.height - 150,100,100); 
        this.ground = new Ground(0, Canvas.height - 54, Canvas.width, 10);

        this.cactus = new Cactus(4000, 4000, 50, 120);
        this.brid = new Brid(4000, 4000, 120, 70);
        this.cloud = new Cloud(4000, 2000, 120, 70);

        this.gameSpeed = 10;
    }

    draw(){
        Canvas.ctx.clearRect(0,0, Canvas.width, Canvas.width);
        this.scoreText.draw();
        this.highscoreText.draw();
        this.player.draw();
        this.ground.draw();

        this.cactus.draw();
        this.brid.draw();
        this.cloud.draw();
    }

    swapCloud(){
        this.cloud = new Cloud(Canvas.width, Canvas.height - 300, 120, 70);
        this.clouds. push(this.cloud);
    }

    swapObstacle(){
        let type: number = this.random(0,2);
        if(type == 0){
            this.brid = new Brid(Canvas.width + 50, Canvas.height - 200, 120, 70);
            this.obstacles.push(this.brid);
        }
        else{
            this.cactus = new Cactus(Canvas.width + 50, Canvas.height - 170, 50, 120);
            this.obstacles.push(this.cactus);
        }
    }

    random(min: number, max: number): number{
        return Math.round(Math.random()*(max-min)+min);
    }

    update(time: number, delta: number){
        Canvas.ctx.clearRect(0, 0, Canvas.width, Canvas.height);

        //score;
        this.score ++;
        this.scoreText.t = "Score: "+ this.score;
        if(this.score> this.highscore){
            this.highscore = this.score;
            this.highscoreText.t = "Highscore: " + this.highscore;
        }
        this.scoreText.draw();
        this.highscoreText.draw();

        // Spawn clouds and obstacles
        this.spawnTimer --;
        if(this.spawnTimer<=0){
            this.swapCloud();
            this.swapObstacle();
            this.spawnTimer = this.initialSpawnTimer - 12;
            if(this.spawnTimer < 60){
                this.spawnTimer=60;
            }
        }

        for(let i = 0; i < this.clouds.length; i++){
            //console.log("Swap Cloud");
            let o: Cloud = this.clouds[i];
            if(o.x + o.w < 0){
                this.clouds.slice(i, 1);
            }
            o.update();
        }
        for(let i =0; i < this.obstacles.length; i++){
            console.log()
            let o = this.obstacles[i];
            if (o.x + o.w < 0) {
                console.log(1);
                this.obstacles.splice(i, 1);
            }
            console.log("---------------------");
            console.log(this.player.x);
            console.log(this.player.w);
            console.log(o.w);
            console.log(this.player.x < o.x + o.w);
            if(this.player.x < o.x + o.w 
            && this.player.x +this.player.w > o.x 
            && this.player.y < o.y + o.h 
            && this.player.y + this.player.h > o.y){
                this.obstacles = [];
                this.score = 0;
                this.spawnTimer = this.initialSpawnTimer;
                this.gameSpeed = 10;
                SceneManager.currentScene = new GameOverScene();
            }
            o.update();
        }

        this.player.update();
        //this.ground.update();
    }
}