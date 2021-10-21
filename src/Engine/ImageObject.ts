import { Canvas } from "./Canvas";
import { GameObject } from "./GameObject";

export class ImageObject extends GameObject{
    urlImg: string;
    img = new Image();
    constructor(urlImg: string, x: number, y: number, w: number, h: number){
        super(x,y,w,h);
        this.urlImg = urlImg;
        this.img.src = urlImg;
    }
    draw(){
        Canvas.ctx.beginPath();
        Canvas.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        Canvas.ctx.closePath();
    }
    update(){

    }
}