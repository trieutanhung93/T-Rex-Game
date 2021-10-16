import {GameObject} from '../abstracts/gameObject'
import { Canvas } from '../abstracts/canvas';

export class Cactus extends GameObject{

    urlImg: string;
    image = new Image();

    sx: number;
    sy: number;
    sw: number;
    sh: number;

    dx: number;

    constructor(x: number, y: number, w:number, h:number){
        super(x, y, w, h);

        this.urlImg = './img/200-offline-sprite.png'
        this.image.src= this.urlImg;

        this.sx = 850;
        this.sy = 0;
        this.sw = 53;
        this.sh = 100;

        this.dx = - 10;
    }
    draw(){
        Canvas.ctx.beginPath();
        Canvas.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        Canvas.ctx.closePath();
    }
    update(){
        this.x += this.dx;
        this.draw();
        this.dx = -10;
    }
}