import { Scene } from "../abstracts/Scene";
import { SceneManager } from "../abstracts/SceneManager";

export class Game{

    sceneManager: SceneManager;
    lastTime: number;
    
    constructor(){
        this.sceneManager = new SceneManager;
    }

    addScene(scene: Scene){
        console.log("Game: addScene");
        this.sceneManager.addScene(scene);
    }

    start(){
        //console.log("Start");
        const time = window.performance.now();
        const delta = window.performance.now() - this.lastTime;
        this.lastTime = time;

        let scene = SceneManager.currentScene;
        scene.update(time, delta);
        scene.draw();
        requestAnimationFrame(() => {
            this.start();
        });
    }
}