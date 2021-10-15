import {GameObject} from '../abstracts/gameObject'
import { canvas, ctx, sprite, gameSpeed } from '../index'

export class Brid extends GameObject{
    sx: number;
    sy: number;
    sw: number;
    sh: number;

    x: number;
    y: number;  
    w: number;
    h: number;

    dx: number;
    drawBirdTimer:number;

    constructor(){
        super();
        this.sx = 850;
        this.sy = 0;
        this.sw = 53;
        this.sh = 100;
        
        this.x = 1500;
        this.y = canvas.height - this.sh;
        this.w = 52;
        this.h = 100;

        this.dx = - gameSpeed;
        this.drawBirdTimer = 0;
    }
    draw(){
        ctx.beginPath();
        if (this.drawBirdTimer <= 10) {
            ctx.drawImage(sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        }
        else if (this.drawBirdTimer <= 20) {
            ctx.drawImage(sprite, this.sx + 88, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        } 
        else {
            this.drawBirdTimer = 0;
        }
        this.drawBirdTimer++;
        ctx.closePath();
    }
    update(){
        this.x += this.dx;
        this.draw();
        this.dx = -gameSpeed;
    }
}