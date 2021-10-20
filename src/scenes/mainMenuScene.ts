import {Canvas} from "../abstracts/Canvas";
import { Control } from "../abstracts/Control";
import { SceneManager } from "../abstracts/SceneManager";
import { PlayGameScene } from "./PlayGameScene";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class MainMenuScene extends Screen{
    
    startText: Label;

    highscore: number;
    scoreText: Score;
    highscoreText: Score;

    ground: Ground;
    player: Player;

    constructor(){
        //super();
        this.startText = new Label("PRESS SPACE TO START GAME", Canvas.width / 2 + 45, Canvas.height / 2 - 20);
        this.scoreText = new Score("Score: 0", 25, 25);
        this.highscore = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Score("Highscore: " + this.highscore, Canvas.width - 200, 25);
        this.player = new Player(25,Canvas.height - 150,100,100); 
        this.ground = new Ground(0, Canvas.height - 54, Canvas.width, 10);
    }

    draw(){
        Canvas.ctx.clearRect(0,0, Canvas.width, Canvas.width);
        this.startText.draw();
        this.scoreText.draw();
        this.highscoreText.draw();
        this.player.draw();
        this.ground.draw();
    }

    update(time: number, delta: number){
        if(Control.keys['Space']){
            console.log("Space");
            SceneManager.currentScene = (new PlayGameScene());
        }
    }
}