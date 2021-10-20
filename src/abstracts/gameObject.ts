export abstract class GameObject{
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    abstract draw(): void;
}