import { CanvasRender } from "../Engine/CanvasRender";
import { Game } from "../Engine/Game";
import { Scene } from "../Engine/Scene";
import { SceneManager } from "../Engine/SceneManager";

export class T_Rex_Game extends Game{

    lastTime: number;
    render: CanvasRender;

    constructor(){
        super();
        this.render = new CanvasRender();
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
        scene.update(time, delta);
        this.render.render(scene);
        requestAnimationFrame(() => {
            this.start();
        });
    }
}