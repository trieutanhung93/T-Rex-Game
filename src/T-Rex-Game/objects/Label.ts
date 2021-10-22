import { TextObject } from "../../Engine/TextObject";

export class Label extends TextObject {
    
    constructor(text: string, x: number, y: number){
        super(text, x, y, 'center', 'black', '30');
    }
}