import { Canvas } from './abstracts/Canvas';
import { Control } from './abstracts/Control';
import { Game } from './objects/Game';
import { MainMenuScene } from './scenes/MainMenuScene';
import { PlayGameScene } from './scenes/PlayGameScene';
import { GameOverScene } from './scenes/GameOverScene';

Canvas.init(<HTMLCanvasElement> document.getElementById('game'));

let control = new Control();
control.handleInput();

let tRexGame = new Game();
console.log("Start");
tRexGame.addScene(new MainMenuScene);
tRexGame.addScene(new PlayGameScene);
tRexGame.addScene(new GameOverScene);

tRexGame.start();