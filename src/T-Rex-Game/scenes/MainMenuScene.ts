import { Canvas } from "../../Engine/Canvas";
import { Control } from "../../Engine/Control";
import { Scene } from "../../Engine/Scene";
import { SceneManager } from "../../Engine/SceneManager";
import { PlayGameScene } from "./exports";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class MainMenuScene extends Scene{
    
    objectList = [];
    
    startText: Label;

    highscore: number;
    scoreText: Score;
    highscoreText: Score;

    ground: Ground;
    player: Player;

    constructor(){
        super();
        this.startText = new Label("PRESS SPACE TO START GAME", Canvas.width / 2 + 45, Canvas.height / 2 - 20);
        this.scoreText = new Score("Score: 0", 25, 25);
        this.highscore = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Score("Highscore: " + this.highscore, Canvas.width - 200, 25);
        this.player = new Player(25,Canvas.height - 150,100,100); 
        this.ground = new Ground(0, Canvas.height - 54, Canvas.width, 10);

        this.objectList.push(this.startText);
        this.objectList.push(this.scoreText);
        this.objectList.push(this.highscoreText);
        this.objectList.push(this.player);
        this.objectList.push(this.ground);
    }

    update(time: number, delta: number){
        if(Control.keys['Space']){
            console.log("Space");
            SceneManager.currentScene = (new PlayGameScene());
        }
    }
}