import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";

export class T_Rex_Game{

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