import { Player } from "../objects/player";
import {Text} from "../objects/text"
import {Canvas} from "../abstracts/canvas";
import { Control } from "../abstracts/control";
import { SceneManager } from "../abstracts/sceneManager";
import { PlayGameScene } from "./playGameScene";
import { Ground } from "../objects/ground";
import { Button } from "../objects/button";

export class GameOverScene extends Screen{

    gameOverButton: Button;
    gameOverText: Text;
    constructor(){
        //super();
        this.gameOverText = new Text("Game Over", Canvas.width / 2 + 10, Canvas.height / 2 - 70, 'center', 'black', '30')
        this.gameOverButton = new Button(Canvas.width / 2 - 50, Canvas.height / 2 - 50, 100, 100);
    }

    draw(){
        //console.log("Draw");
        this.gameOverButton.draw();
        this.gameOverText.draw();
    }

    update(time: number, delta: number){
        if(Control.keys['Space']){
            console.log("Space");
            SceneManager.currentScene = (new PlayGameScene());
        }
    }
}