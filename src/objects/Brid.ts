import {ImageObject} from '../abstracts/ImageObject';

export class Brid extends ImageObject{

    dx: number;

    constructor(x: number, y: number, w: number, h: number){
        super('./img/brid.png',x, y, w,h);

        this.dx = - 10;
    }
    draw(){
        super.draw();
    } 
    update(){
        this.x += this.dx;
        this.draw();
    }
}