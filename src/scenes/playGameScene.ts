import { Player } from "../objects/player";
import {Text} from "../objects/Text"
import {Canvas} from "../abstracts/canvas";

export class PlayGameScene extends Screen{
    
    scoreText: Text;
    highscoreText: Text;
    player: Player;
    startText: Text;
    highscore: number;

    constructor(){
        super();
    }
    update(time: number, delta: number){

    }
}