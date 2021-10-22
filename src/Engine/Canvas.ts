import { ImageObject } from "./ImageObject";
import { Scene } from "./Scene";
import { TextObject } from "./TextObject";

export class Canvas {
    static ctx: CanvasRenderingContext2D;
    static canvas: HTMLCanvasElement;
    static configs;

    constructor(config){
        Canvas.configs = config;
        console.log(Canvas.configs);
        Canvas.canvas = <HTMLCanvasElement> document.getElementById(config.canvasId);
        Canvas.canvas.width = Canvas.configs.width;
        Canvas.canvas.height = Canvas.configs.height;
        Canvas.ctx = Canvas.canvas.getContext('2d');
        console.log(Canvas.ctx);
        
        console.log(Canvas.canvas);
    }

    render(scene: Scene){
        scene.objectList.forEach(obj =>{
            if(obj instanceof ImageObject){
                Canvas.renderImage(obj);
            }
            else if(obj instanceof TextObject){
                Canvas.renderText(obj);
            }
        })
    }

    static renderImage(obj: ImageObject){
        const {urlImg, x, y, w, h} = obj;
        var img = new Image();
        img.src = urlImg;
        Canvas.ctx.beginPath();
        Canvas.ctx.drawImage(img, x, y, w, h);
        Canvas.ctx.closePath();
    }
    static renderText(obj: TextObject){
        const {t, x, y, a, c, s} = obj;
        Canvas.ctx.beginPath();
        Canvas.ctx.fillStyle = c;
        Canvas.ctx.font = s + "px sans-serif";
        Canvas.ctx.textAlign = a;
        Canvas.ctx.fillText(t, x, y);
        Canvas.ctx.closePath();
    }
}