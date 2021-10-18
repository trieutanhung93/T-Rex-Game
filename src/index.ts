import { Canvas } from './abstracts/canvas';
import { Control } from './abstracts/control';
import {Player, Cactus, Brid, Cloud, Text, Ground} from './objects/exports';
import { Game } from './objects/game';
import { MainMenuScene } from './scenes/mainMenuScene';
import { PlayGameScene } from './scenes/playGameScene';
import { GameOverScene } from './scenes/gameOverScene';
import { Scene } from './abstracts/scene';

Canvas.init(<HTMLCanvasElement> document.getElementById('game'));

let control = new Control();
control.handleInput();

let tRexGame = new Game();
console.log("Start");
tRexGame.addScene(new MainMenuScene);
tRexGame.addScene(new PlayGameScene);
tRexGame.addScene(new GameOverScene);

tRexGame.start();