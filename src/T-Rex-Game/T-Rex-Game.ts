import { Canvas } from "../Engine/Canvas";
import { Game } from "../Engine/Game";
import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";

export class T_Rex_Game extends Game{

    lastTime: number;

    constructor(config){
        super(config);
    }

    addScene(scene: Scene){
        super.addScene(scene);
    }

    start(){
        //console.log("Start");
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