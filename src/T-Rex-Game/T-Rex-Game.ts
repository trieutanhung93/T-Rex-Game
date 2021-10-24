import { Canvas } from "../Engine/Canvas";
import { Game } from "../Engine/Game";
import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";

export class T_Rex_Game extends Game{

    constructor(config){
        super(config);
    }

    addScene(scene: Scene){
        super.addScene(scene);
    }

    start(){
        super.start();
    }
}