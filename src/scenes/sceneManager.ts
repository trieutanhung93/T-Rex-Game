import { Scene } from "./scene";

export class SceneManager{
    static currentScene: Scene;
    static scenes: Scene[] =[];

    addScene(scene: Scene){
        SceneManager.scenes.push(scene);
        if(SceneManager.scenes.length == 1){
            SceneManager.currentScene = scene;
        }
    }

    findSceneIndex(scene: Scene): any {
        let indexScene = SceneManager.scenes.findIndex(element => {
            return JSON.stringify(element) ==  JSON.stringify(scene);
        });
        return indexScene;
    }
}