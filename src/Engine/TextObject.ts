import { Canvas } from "./Canvas";
import { GameObject } from "./GameObject";

export class TextObject extends GameObject{
    t: string; //text
    a: CanvasTextAlign; //align
    c: string; //color
    s: string; //size
    constructor(text: string, x: number, y: number, a: CanvasTextAlign, c: string, s: string){
        super(x, y, 0, 0);
        this.t = text;
        this.a = a;
        this.c = c;
        this.s = s;
    }
}