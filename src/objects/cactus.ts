import {GameObject} from '../abstracts/gameObject'
import { Canvas } from '../abstracts/canvas';

export class Cactus extends GameObject{

    urlImg: string;
    image = new Image();

    dx: number;

    constructor(x: number, y: number, w:number, h:number){
        super(x, y, w, h);

        this.urlImg = './img/cactus.png'
        this.image.src= this.urlImg;

        this.dx = - 10;
    }
    draw(){
        Canvas.ctx.beginPath();
        Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        Canvas.ctx.closePath();
    }
    update(){
        this.x += this.dx;
        this.draw();
        this.dx = -10;
    }
}