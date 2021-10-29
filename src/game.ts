import 'phaser';
import { GameOverScene } from './scenes/GameOverScene';
import { MainMenuScene } from './scenes/MainMenuScene';
import { PlayGameScene } from './scenes/PlayGameScene';

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

var config: Phaser.Types.Core.GameConfig = {
  title: 'T-Rex Game',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '2.0',
  width: 640,
  height: 400,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [MainMenuScene, PlayGameScene, GameOverScene],
  input: {
    keyboard: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 300 }
    }
  },
  backgroundColor: '#98d687',
  render: { pixelArt: true, antialias: false }
}

window.addEventListener('load', () => {
  const game = new Game(config);
});

