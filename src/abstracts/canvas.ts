export class Canvas {
    static width: number;
    static height: number;
    static ctx: CanvasRenderingContext2D;
    static init(el: HTMLCanvasElement){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        Canvas.ctx = el.getContext('2d');
    }
}