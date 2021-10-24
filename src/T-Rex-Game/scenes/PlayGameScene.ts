import { Canvas } from "../../Engine/Canvas";
import { Scene } from "../../Engine/Scene";
import { SceneManager } from "../../Engine/SceneManager";
import { GameOverScene } from "./exports";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class PlayGameScene extends Scene{
    
    objectList = [];
    
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

    constructor(config){
        super(config);
        this.scoreText = new Score("Score: 0", 25, 25);
        this.highscore = 0;
        this.score = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Score("Highscore: " + this.highscore, this.renderer.configs.width - 200, 25);
        this.player = new Player(25, this.renderer.configs.height - 150,100,100); 
        this.ground = new Ground(0, this.renderer.configs.height - 54, this.renderer.configs.width, 10);

        this.cactus = new Cactus(4000, 4000, 50, 120);
        this.brid = new Brid(4000, 4000, 120, 70);
        this.cloud = new Cloud(4000, 2000, 120, 70);

        this.gameSpeed = 10;

        this.objectList.push(this.scoreText);
        this.objectList.push(this.highscoreText);
        this.objectList.push(this.player);
        this.objectList.push(this.ground);
        this.objectList.push(this.cactus);
        this.objectList.push(this.brid);
        this.objectList.push(this.cloud);
    }

    swapCloud(){
        this.cloud = new Cloud(this.renderer.configs.width, this.renderer.configs.height - 300, 120, 70);
        this.clouds. push(this.cloud);
    }

    swapObstacle(){
        let type: number = this.random(0,2);
        if(type == 0){
            this.brid = new Brid(this.renderer.configs.width + 50, this.renderer.configs.height - 200, 120, 70);
            this.obstacles.push(this.brid);
        }
        else{
            this.cactus = new Cactus(this.renderer.configs.width + 50, this.renderer.configs.height - 170, 50, 120);
            this.obstacles.push(this.cactus);
        }
    }

    random(min: number, max: number): number{
        return Math.round(Math.random()*(max-min)+min);
    }

    update(time: number, delta: number){

        this.renderer.ctx.clearRect(0, 0, this.renderer.configs.width, this.renderer.configs.height);

        //score;
        this.score ++;
        this.scoreText.t = "Score: "+ this.score;
        if(this.score> this.highscore){
            this.highscore = this.score;
            this.highscoreText.t = "Highscore: " + this.highscore;
        }
        this.renderer.renderText(this.scoreText);
        this.renderer.renderText(this.highscoreText);

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
            this.renderer.renderImage(o);
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
                SceneManager.currentScene = new GameOverScene(this.configs);
            }
            o.update();
            this.renderer.renderImage(o);
        }

        this.player.update();
        this.renderer.renderImage(this.player);
        this.renderer.renderImage(this.ground);
        //this.ground.update();
    }
}