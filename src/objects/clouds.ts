import { ImageObject } from '../abstracts/ImageObject';

export class Cloud extends ImageObject{

    dx: number;

    constructor(x: number, y: number, w: number, h: number){
        super('./img/cloud.png', x, y, w, h);

        this.dx = -20;
    }
    draw(){
        super.draw();
    }
    update(){
        this.x += this.dx;
        this.draw()
    }
}