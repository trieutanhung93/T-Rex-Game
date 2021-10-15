import {GameObject} from '../abstracts/gameObject'
import { canvas, ctx, gravity, keys, sprite } from '../index';

export class Player extends GameObject{

    sx: number;
    sy: number;
    sw: number;
    sh: number;

    x: number;
    y: number;
    w: number;
    h: number;

    dy: number;
    jumpForce: number;
    grounded: boolean;
    originalHeight: number;
    jumpTimer: number;
    isBow: boolean;

    constructor() {
        super();
        this.sx = 75;
        this.sy = 0;
        this.sw = 85;
        this.sh = 100;
        this.x = 30;
        this.y = canvas.height - this.sh;
        this.w = 85;
        this.h = 100;

        this.dy = 0;
        this.jumpForce = 15;
        this.grounded = false;
        this.originalHeight = this.y;
        this.jumpTimer =0;
        this.isBow = false;
    }
    draw(){
        ctx.beginPath();
        if(this.isBow == false){
            ctx.drawImage(sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        }
        else{
            ctx.drawImage(sprite, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h);
        }
        ctx.closePath()
    }
    update(){
        if (keys['Space'] || keys['KeyW'] || keys['ArrowUp']) {
            this.jump();
        } 
        else {
            this.jumpTimer = 0;
        }

        if (keys['ArrowDown'] || keys['KeyS']) {
            this.isBow = true;
            this.h = this.originalHeight / 2;
        } 
        else {
            this.isBow = false;
            this.h = this.originalHeight;
        }

        this.y+=this.dy;

        if(this.y+this.h<canvas.height){
            this.dy += gravity;
            this.grounded=false;
        }
        else{
            this.dy=0;
            this.grounded=true;
            this.y=canvas.height-this.h;
        }

        this.draw();
    }
    jump(){
        ctx.clearRect(this.x, this.y, this.w, this.h);
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