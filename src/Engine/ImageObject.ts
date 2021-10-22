import { Canvas } from "./Canvas";
import { GameObject } from "./GameObject";

export class ImageObject extends GameObject{
    urlImg: string;
    constructor(urlImg: string, x: number, y: number, w: number, h: number){
        super(x,y,w,h);
        this.urlImg = urlImg;
    }
    update(){

    }
}