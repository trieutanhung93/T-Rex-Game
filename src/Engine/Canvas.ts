export class Canvas {
    static width: number;
    static height: number;
    static ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    constructor(){
        this.canvas = <HTMLCanvasElement> document.getElementById('game');
    }
    setup(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        Canvas.width = this.canvas.width;
        Canvas.height = this.canvas.height;
        Canvas.ctx = this.canvas.getContext('2d');
    }
}