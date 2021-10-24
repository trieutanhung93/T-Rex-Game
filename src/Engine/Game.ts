import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";
import { Canvas } from "./Canvas";

export class Game{
    sceneManager: SceneManager;
    renderer: Canvas;
    configs;

    lastTime: number;
    
    constructor(configs){
        this.sceneManager = new SceneManager();
        this.configs = configs;
        this.renderer = new Canvas(configs)
    }
    
    addScene(scene: Scene){
        this.sceneManager.addScene(scene);
    }

    start(){
        const time = window.performance.now();
        const delta = window.performance.now() - this.lastTime;
        this.lastTime = time;

        let scene = SceneManager.currentScene;
        this.renderer.render(scene);
        scene.update(time, delta);
        requestAnimationFrame(() => {
            this.start();
        });
    }
}