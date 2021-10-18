import {GameObject} from '../abstracts/gameObject'
import { Canvas } from '../abstracts/canvas';
import { Control } from '../abstracts/control';

export class Player extends GameObject{
    
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
        super(x, y, w, h);
        
        this.urlImg = './img/trex-1.png';
        this.image.src= this.urlImg;

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
        Canvas.ctx.beginPath();
        if(this.isBow == false){
            this.urlImg = './img/trex-1.png';
            this.image.src= this.urlImg;
            Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
        else{
            this.urlImg = './img/trex-2.png';
            this.image.src= this.urlImg;
            Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
        Canvas.ctx.closePath()
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

        if(this.y + this.h <Canvas.height -this.ground){
            this.dy += this.gravity;
            this.grounded=false;
        }
        else{
            this.dy=0;
            this.grounded=true;
            this.y=Canvas.height-this.h -this.ground;
        }

        this.draw();
    }
    jump(){
        Canvas.ctx.clearRect(this.x, this.y, this.w, this.h);
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