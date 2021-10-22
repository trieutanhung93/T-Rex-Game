import { ImageObject } from "../../Engine/ImageObject";

export class Ground extends ImageObject{

    dx: number;

    constructor(x: number, y: number, w: number, h: number){
        super('./img/ground.png', x, y, w,h);

        this.dx = - 1;
    }

    update(){
        this.x += this.dx;
    }
}