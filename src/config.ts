import { MainMenuScene } from "./scenes/MainMenuScene";
import { PlayGameScene } from "./scenes/PlayGameScene";
import { GameOverScene } from "./scenes/GameOverScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'T-Rex Game',
    url: 'https://github.com/trieutanhung93/T-Rex-Game/tree/phaser',
    version: '2.0',
    width: innerWidth,
    height: innerHeight,
    zoom: 3,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [MainMenuScene, PlayGameScene, GameOverScene],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    backgroundColor: '#000000',
    render: { pixelArt: true, antialias: false }
}