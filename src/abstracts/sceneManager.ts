import { Scene } from "../abstracts/scene";

export class SceneManager{
    static currentScene: Scene;
    static scenes: Scene[] =[];

    addScene(scene: Scene){
        //console.log("SceneManager: addScene")
        SceneManager.scenes.push(scene);
        if(SceneManager.scenes.length == 1){
            SceneManager.currentScene = scene;
        }
        //console.log(SceneManager.currentScene);
    }

    findSceneIndex(scene: Scene): any {
        let indexScene = SceneManager.scenes.findIndex(element => {
            return JSON.stringify(element) ==  JSON.stringify(scene);
        });
        return indexScene;
    }
}