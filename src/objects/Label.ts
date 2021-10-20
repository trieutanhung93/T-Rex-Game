import { Canvas } from "../abstracts/Canvas";
import { Text } from "../abstracts/TextObject";

export class Label extends Text {
    
    constructor(text: string, x: number, y: number){
        super(text, x, y, 'center', 'black', '30');
    }

    draw(){
        super.draw();
    }
}