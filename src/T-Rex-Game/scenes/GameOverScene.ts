import { Canvas } from "../../Engine/Canvas";
import { Control } from "../../Engine/Control";
import { Scene } from "../../Engine/Scene";
import { SceneManager } from "../../Engine/SceneManager";
import { PlayGameScene } from "./exports";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class GameOverScene extends Scene{

    gameOverButton: Button;
    gameOverText: Label;

    constructor(){
        super();
        this.gameOverText = new Label("Game Over", Canvas.width / 2 + 10, Canvas.height / 2 - 70);
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