import { Canvas } from "./Canvas";
import { ImageObject } from "./ImageObject";
import { Scene } from "./Scene";
import { TextObject } from "./TextObject";

export class CanvasRender{
    render(scene: Scene){
        scene.objectList.forEach(obj =>{
            if(obj instanceof ImageObject){
                this.renderImage(obj);
            }
            else if(obj instanceof TextObject){
                this.renderText(obj);
            }
        })
    }

    renderImage(obj: ImageObject){
        obj.draw();
    }
    renderText(obj: TextObject){
        obj.draw();
    }
}