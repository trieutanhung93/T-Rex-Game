import {GameObject} from '../abstracts/gameObject'
import { Canvas } from '../abstracts/canvas';
import { Control } from '../abstracts/control';

export class Player extends GameObject{
    urlImg: string;
    image = new Image();

    sx: number;
    sy: number;
    sw: number;
    sh: number;

    dy: number;
    jumpForce: number;
    grounded: boolean;
    originalHeight: number;
    jumpTimer: number;
    isBow: boolean;

    constructor(x: number, y: number ,w: number, h: number) {
        super(x, y, w, h);
        
        this.urlImg = './img/200-offline-sprite.png'
        this.image.src= this.urlImg;

        this.sx = 75;
        this.sy = 0;
        this.sw = 85;
        this.sh = 100;

        this.dy = 0;
        this.jumpForce = 15;
        this.grounded = false;
        this.originalHeight = this.y;
        this.jumpTimer =0;
        this.isBow = false;
    }
    draw(){
        Canvas.ctx.beginPath();
        if(this.isBow == false){
            Canvas.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        }
        else{
            Canvas.ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        }
        Canvas.ctx.closePath()
    }
    update(){
        if (Control.keys['Space'] || Control.keys['KeyW'] || Control.keys['ArrowUp']) {
            this.jump();
        } 
        else {
            this.jumpTimer = 0;
        }

        if (Control.keys['ArrowDown'] || Control.keys['KeyS']) {
            this.isBow = true;
            this.h = this.originalHeight / 2;
        } 
        else {
            this.isBow = false;
            this.h = this.originalHeight;
        }

        this.y+=this.dy;

        if(this.y+this.h<Canvas.canvas.height){
            this.dy += 1; //gravity
            this.grounded=false;
        }
        else{
            this.dy=0;
            this.grounded=true;
            this.y=Canvas.canvas.height-this.h;
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