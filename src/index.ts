import { Canvas } from './abstracts/canvas';
import { Control } from './abstracts/control';
import {Player, Cactus, Brid, Cloud, Text} from './objects/exports';


Canvas.init(<HTMLCanvasElement> document.getElementById('game'));

let control = new Control();
control.handleInput();

