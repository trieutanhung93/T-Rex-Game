import { ImageObject } from "./ImageObject";
import { Scene } from "./Scene";
import { TextObject } from "./TextObject";

export class Canvas {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    configs;

    constructor(config){
        this.configs = config;
        this.canvas = <HTMLCanvasElement> document.getElementById(config.canvasId);
        this.canvas.width = this.configs.width;
        this.canvas.height = this.configs.height;
        this.ctx = this.canvas.getContext('2d');
    }

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
        const {urlImg, x, y, w, h} = obj;
        var img = new Image();
        img.src = urlImg;
        this.ctx.beginPath();
        this.ctx.drawImage(img, x, y, w, h);
        this.ctx.closePath();
    }
    renderText(obj: TextObject){
        const {t, x, y, a, c, s} = obj;
        this.ctx.beginPath();
        this.ctx.fillStyle = c;
        this.ctx.font = s + "px sans-serif";
        this.ctx.textAlign = a;
        this.ctx.fillText(t, x, y);
        this.ctx.closePath();
    }
}