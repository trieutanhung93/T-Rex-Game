import {Canvas} from "../abstracts/canvas";
import {Brid, Cactus, Cloud, Ground, Player, Text} from "../objects/exports";
import { Control } from "../abstracts/control";
import { SceneManager } from "../abstracts/sceneManager";
import { PlayGameScene } from "./playGameScene";

export class MainMenuScene extends Screen{
    
    scoreText: Text;
    highscoreText: Text;
    player: Player;
    startText: Text;
    highscore: number;
    ground: Ground;

    constructor(){
        //super();
        this.startText = new Text("PRESS SPACE TO START GAME", Canvas.width / 2 + 45, Canvas.height / 2 - 20, 'center', 'black', '30');
        this.scoreText = new Text("Score: 0", 25, 25, "left", "#212121", "20");
        this.highscore = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Text("Highscore: " + this.highscore, Canvas.width - 25, 25, "right", "#212121", "20");
        this.player = new Player(25,Canvas.height - 150,100,100); 
        this.ground = new Ground(0, Canvas.height - 54, Canvas.width, 10);
    }

    draw(){
        //console.log("Draw");
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