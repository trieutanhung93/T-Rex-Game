import { Canvas } from "../abstracts/canvas";

export class Text {
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
        Canvas.ctx.beginPath();
        Canvas.ctx.fillStyle = this.c;
        Canvas.ctx.font = this.s + "px sans-serif";
        Canvas.ctx.textAlign = this.a;
        Canvas.ctx.fillText(this.t, this.x, this.y);
        Canvas.ctx.closePath();
    }
}