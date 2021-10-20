import { Text } from "../abstracts/TextObject";

export class Score extends Text {
    constructor(text: string, x: number, y: number){
        super(text, x, y, "left", "#212121", "20");
    }
    draw(){
        super.draw();
    }
}