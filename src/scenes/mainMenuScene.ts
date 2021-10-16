import { Player } from "../objects/player";
import {Text} from "../objects/Text"
import {Canvas} from "../abstracts/canvas";

export class MainMenuScene extends Screen{
    
    scoreText: Text;
    highscoreText: Text;
    player: Player;
    startText: Text;
    highscore: number;

    constructor(){
        super();
        this.startText = new Text("PRESS SPACE TO START GAME", Canvas.width / 2 + 45, Canvas.height / 2 - 20, 'center', 'black', '30');
        this.scoreText = new Text("Score: 0", 25, 25, "left", "#212121", "20");
        this.highscore = 0;
        if (localStorage.getItem('highscore')) {
            this.highscore = Number(localStorage.getItem('highscore'));
        }
        this.highscoreText = new Text("Highscore: " + this.highscore, Canvas.width - 25, 25, "right", "#212121", "20");
        this.player = new Player(25,0,100,100);
    }
    update(time: number, delta: number){

    }
}