import { Canvas } from './Engine/Canvas';
import { Control } from './Engine/Control';
import { T_Rex_Game } from './T-Rex-Game/T-Rex-Game';
import { MainMenuScene, PlayGameScene, GameOverScene } from './T-Rex-Game/scenes/exports';

var config = {
    canvasId: 'game',
    width: innerWidth,
    height: innerHeight,
}

let canvas = new Canvas(config);

let control = new Control();
control.handleInput();

let tRexGame = new T_Rex_Game(config);
console.log("Start");
tRexGame.addScene(new MainMenuScene);
tRexGame.addScene(new PlayGameScene);
tRexGame.addScene(new GameOverScene);

tRexGame.start();