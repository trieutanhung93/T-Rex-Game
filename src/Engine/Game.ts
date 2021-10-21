import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";

export class Game{
    sceneManager: SceneManager;

    constructor(){
        this.sceneManager = new SceneManager();
    }
    
    addScene(scene: Scene){
        console.log("Game: addScene");
        this.sceneManager.addScene(scene);
    }

    start(){

    }

}