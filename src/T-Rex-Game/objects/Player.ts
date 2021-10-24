import { Canvas } from '../../Engine/Canvas';
import { Control } from '../../Engine/Control';
import { ImageObject } from "../../Engine/ImageObject";

export class Player extends ImageObject{
    
    urlImg: string;
    image = new Image();

    dy: number;
    jumpForce: number;
    grounded: boolean;
    originalHeight: number;
    originalWeight: number;
    jumpTimer: number;
    isBow: boolean;
    ground: number;
    gravity: number;
    constructor(x: number, y: number ,w: number, h: number) {
        super('./img/trex-1.png', x, y, w, h);

        this.originalHeight = this.h;
        this.originalWeight = this.w;

        this.grounded = false;
        this.ground= 54;

        this.jumpForce = 15;       
        this.jumpTimer =0;

        this.isBow = false;
        this.dy = 0;
        this.gravity = 1;
    }
    draw(){
        if(this.isBow == false){
            this.urlImg = './img/trex-1.png';
        }
        else{
            this.urlImg = './img/trex-2.png';
        }
    }
    update(){
        //console.log("Player : update");
        if (Control.keys['Space'] || Control.keys['KeyW'] || Control.keys['ArrowUp']) {
            this.jump();
        } 
        else {
            this.jumpTimer = 0;
        }

        if (Control.keys['ArrowDown'] || Control.keys['KeyS']) {
            this.isBow = true;
            this.h = this.originalHeight *3/4;
        } 
        else {
            this.isBow = false;
            this.h = this.originalHeight;
            this.w = this.originalWeight;
        }

        this.y+=this.dy;

        if(this.y + this.h <innerHeight -this.ground){
            this.dy += this.gravity;
            this.grounded=false;
        }
        else{
            this.dy=0;
            this.grounded=true;
            this.y=innerHeight-this.h -this.ground;
        }
    }
    jump(){
        //Canvas.ctx.clearRect(this.x, this.y, this.w, this.h);
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } 
        else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }
}