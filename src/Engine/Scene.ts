import { Canvas } from "./Canvas";
import { GameObject } from "./GameObject";

export class Scene{
    objectList: GameObject[];

    renderer: Canvas;
    configs;
    constructor(config){
        this.configs = config;
        this.renderer = new Canvas(config);
    }
    update(time: number, delta: number){
        
    }
}