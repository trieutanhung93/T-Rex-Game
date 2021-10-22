import { ImageObject } from "../../Engine/ImageObject";

export class Cactus extends ImageObject{

    dx: number;

    constructor(x: number, y: number, w:number, h:number){
        super('./img/cactus.png', x, y, w, h);

        this.dx = - 10;
    }
    update(){
        this.x += this.dx;
    }
}