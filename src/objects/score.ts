import {canvas, ctx} from '../index';

export class Score {
    t: string; //text
    x: number; //x
    y: number; //y
    a: CanvasTextAlign; //align
    c: string; //color
    s: string; //size

    
    constructor(text: string, x: number, y: number, a: CanvasTextAlign, c: string, s: string){
        this.t = text;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px sans-serif";
        ctx.textAlign = this.a;
        ctx.fillText(this.t, this.x, this.y);
        ctx.closePath();
    }
}