import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";
import { Canvas } from "./Canvas";

export class Game{
    sceneManager: SceneManager;
    renderer: Canvas;
    configs;

    constructor(configs){
        this.sceneManager = new SceneManager();
        this.configs = configs;
        this.renderer = new Canvas(configs)
    }
    
    addScene(scene: Scene){
        this.sceneManager.addScene(scene);
    }

    start(){

    }
}