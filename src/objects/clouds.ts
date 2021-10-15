import {GameObject} from '../abstracts/gameObject'
import { canvas, ctx, sprite, gameSpeed } from '../index'

export class Cloud extends GameObject{
    sx: number;
    sy: number;
    sw: number;
    sh: number;

    x: number;
    y: number;  
    w: number;
    h: number;

    dx: number;

    constructor(){
        super();
        this.sx = 175;
        this.sy = 0;
        this.sw = 85;
        this.sh = 100;

        this.x = 1830;
        this.y = canvas.height - this.sh - 50;
        this.w = 85;
        this.h = 100;
        this.dx = -3;
    }
    draw(){
        ctx.beginPath();
        ctx.drawImage(sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
    update(){
        this.x -= this.dx;
        this.draw()
    }
}