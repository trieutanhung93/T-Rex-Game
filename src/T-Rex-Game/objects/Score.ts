import { TextObject } from "../../Engine/TextObject";

export class Score extends TextObject {
    constructor(text: string, x: number, y: number){
        super(text, x, y, "left", "#212121", "20");
    }
}