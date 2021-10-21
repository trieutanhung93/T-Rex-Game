export class Canvas {
    static width: number;
    static height: number;
    static ctx: CanvasRenderingContext2D;
    static init(el: HTMLCanvasElement){
        el.width = window.innerWidth;
        el.height = window.innerHeight;
        this.width = el.width;
        this.height = el.height;
        Canvas.ctx = el.getContext('2d');
    }
}