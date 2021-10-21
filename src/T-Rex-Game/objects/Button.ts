import { ImageObject } from "../../Engine/ImageObject";

export class Button extends ImageObject{

    dx: number;

    constructor(x: number, y: number, w: number, h: number){
        super('./img/gameOver.png', x, y, w,h);

        this.dx = - 10;
    }
    draw(){
        super.draw();
    }
    update(){
        this.draw();
    }
}