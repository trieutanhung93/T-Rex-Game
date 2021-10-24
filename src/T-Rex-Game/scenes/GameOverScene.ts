import { Canvas } from "../../Engine/Canvas";
import { Control } from "../../Engine/Control";
import { Scene } from "../../Engine/Scene";
import { SceneManager } from "../../Engine/SceneManager";
import { PlayGameScene } from "./exports";
import {Brid, Button, Cactus, Cloud, Ground, Player, Score, Label} from '../objects/exports';

export class GameOverScene extends Scene{

    objectList = [];
    
    gameOverButton: Button;
    gameOverText: Label;

    constructor(config){
        super(config);
        this.gameOverText = new Label("Game Over", this.renderer.configs.height / 2 + 10, this.renderer.configs.height / 2 - 70);
        this.gameOverButton = new Button(this.renderer.configs.width / 2 - 50, this.renderer.configs.height / 2 - 50, 100, 100);

        this.objectList.push(this.gameOverButton);
        this.objectList.push(this.gameOverText);
    }

    update(time: number, delta: number){
        if(Control.keys['Space']){
            console.log("Space");
            SceneManager.currentScene = (new PlayGameScene(this.configs));
        }
    }
}